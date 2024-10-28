import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { Button, Form, FormMessage, Heading, Input, useToast } from "@/features/core/components/ui";
import { dateFormatter, getDifferenceInDaysBetweenDates } from "@/features/core/utils";
import { CalendarDateRangePicker, ConfirmModal, FormField, Icons } from "@/features/core/components";
import { useMemberById } from "@/features/members/hooks";
import { useCreateAssignment } from "@/features/assigments/hooks";
import { assignmentGiveFormSchema } from "@/features/assigments/schemas";
import type { AssignmentField, AssignmentGiveFormValues } from "@/features/assigments/types";

export function AssignmentsGivePage() {
	const { id } = useParams<{ id: string }>();
	const { data: member, error, isLoading } = useMemberById(id ?? "");
	const { toast } = useToast();
	const navigate = useNavigate();
	const { mutate: createAssignment, isPending } = useCreateAssignment();
	const form = useForm<AssignmentGiveFormValues>({
		resolver: zodResolver(assignmentGiveFormSchema),
		defaultValues: {
			quantity: 1,
		},
	});
	const [items, setItems] = useState<AssignmentField[]>([]);

	const today = new Date();
	const initialDate = {
		from: today,
		to: addDays(today, 0),
	};
	const [date, setDate] = useState<DateRange | undefined>(initialDate);

	const [confirming, setConfirming] = useState<boolean>(false);

	if (isLoading) {
		return <Heading title="Cargando..." />;
	}

	if (error || (!member && !isLoading)) {
		toast({
			title: "Ocurrió un error al cargar la información de este socio.",
			description: "Serás redirigido a la página de socios.",
		});

		setTimeout(() => {
			navigate("/dashboard/members");
		}, 5000);
	}

	const onChangeDateRange: SelectRangeEventHandler = (data) => {
		setDate(data);
	};

	const onSubmit = () => {
		addItem();
	};

	const addItem = () => {
		if (!date?.from || !date.to) {
			form.setError("root", { type: "required" });
			return;
		}

		form.clearErrors("root");

		const currentField: AssignmentField = {
			...form.getValues(),
			quantity: form.getValues("quantity") || 1,
			from: date.from,
			to: date.to,
			id: new Date().getTime(),
		};

		const repeatedItem = items.some((addedItem) => {
			return (
				currentField.itemName === addedItem.itemName &&
				currentField.from === addedItem.from &&
				currentField.to === addedItem.to
			);
		});

		if (Object.entries(form.formState.errors).length > 0) return;

		if (repeatedItem) {
			toast({
				title: "Elemento repetido",
				variant: "destructive",
			});

			const updatedItems = items.map((item) => {
				// same item, same date range, different quantity
				if (
					item.itemName === currentField.itemName &&
					item.from === currentField.from &&
					item.to === currentField.to &&
					item.quantity !== currentField.quantity
				) {
					toast({
						title: "Actualizando cantidad...",
					});
					return { ...item, quantity: currentField.quantity };
				}

				return item;
			});

			return setItems(updatedItems);
		}

		setItems((prev) => [...prev, currentField]);
		form.reset();
		setDate(initialDate);
	};

	const deleteItem = (id: number) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	const handleCreateAssignment = () => {
		// TODO: Create assignment
		console.log({ assignments: items });
		// createAssignment()
	};

	const openConfirmModal = () => setConfirming(true);
	const closeConfirmModal = () => setConfirming(false);

	return (
		<>
			<div className="flex flex-col gap-5 items-start">
				<Heading title="Crea una cesión" />
				<span>
					<Heading title="Estás por cederle a:" className="text-xl" />
					<p className="text-foreground uppercase font-semibold">
						{member?.name} {member?.lastName} - DNI {member?.identificationNumber} | Teléfono:{" "}
						{member?.phoneInfo.phone1} {member?.phoneInfo.phone2 && `/ ${member?.phoneInfo.phone2}`}
					</p>
				</span>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 items-start w-full md:w-auto">
						<div className="grid md:grid-cols-2 xl:grid-cols-3 items-start gap-5 w-full">
							<FormField
								formControl={form.control}
								name="itemName"
								label="Cosa a ceder"
								render={{
									renderProp: ({ field }) => <Input disabled={isPending} {...field} />,
								}}
							/>
							<FormField
								formControl={form.control}
								name="quantity"
								label="Cantidad"
								render={{
									renderProp: ({ field }) => <Input type="number" disabled={isPending} {...field} />,
								}}
							/>

							<FormField
								formControl={form.control}
								name={null}
								label={null}
								render={{
									renderProp: () => (
										<>
											<CalendarDateRangePicker
												label="Rango de fechas de validez"
												currentDate={date}
												onChangeDateRage={onChangeDateRange}
											/>
											{!date && (
												<FormMessage className="text-sm">
													Debes proveer un rango de fechas de validez para la cesión
												</FormMessage>
											)}
										</>
									),
								}}
							/>
						</div>
						<Button type="submit" disabled={isPending}>
							Agregar a la lista
						</Button>

						{items.length > 0 && (
							<ul className="flex flex-col gap-2">
								<li>
									<Heading title="Vas a ceder" className="text-xl" />
								</li>
								{items.map((item) => (
									<li key={item.id} className="flex justify-start items-center gap-2 [&>button]:hover:text-destructive">
										<span className="text-foreground font-medium">
											<span className="uppercase">
												{item.itemName} - X{item.quantity}
											</span>{" "}
											| {dateFormatter(item.from)} - {dateFormatter(item.to)} (
											{getDifferenceInDaysBetweenDates(item.from, item.to)} día(s))
										</span>
										<Button
											size="icon"
											className="bg-transparent text-destructive/30 hover:bg-destructive hover:!text-white shadow-none w-auto h-auto p-1"
											onClick={() => deleteItem(item.id)}>
											<Icons.close size={20} />
										</Button>
									</li>
								))}
							</ul>
						)}
					</form>
				</Form>

				<Button size="lg" disabled={items.length === 0} onClick={openConfirmModal}>
					Crear cesión
				</Button>
			</div>

			<ConfirmModal
				title={`¿Confirmas la cesión a ${`${member?.name} ${member?.lastName}`.toUpperCase()}?`}
				confirmButtonLabel="Ceder"
				isOpen={confirming}
				onClose={closeConfirmModal}
				onConfirm={handleCreateAssignment}
				isDisabled={isPending}
			/>
		</>
	);
}
