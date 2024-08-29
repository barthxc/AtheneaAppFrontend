import { useEffect, useRef, useState } from "react";
import { type ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useImagePreview } from "@/features/core/hooks";
import { Button, Gallery, Input, Modal, Form } from "@/features/core/components/ui";
import { ConfirmModal, FormField, Icons } from "@/features/core/components";
import { useCreateColaborator, useDeleteColaborator, useGetColaborators } from "@/features/content/hooks";
import { collaboratorFormSchema } from "@/features/content/schemas";
import type { CollaboratorFormValues } from "@/features/content/types";
import { Paragraph } from "@/features/landing/components";

export function Collaborators() {
	const { data, isLoading } = useGetColaborators();
	const {
		mutate: createColaborator,
		isPending: isPendingCreate,
		isError: isErrorCreate,
		isSuccess: isSuccessCreate,
	} = useCreateColaborator();
	const {
		mutate: deleteColaborator,
		isPending: isPendingDelete,
		isError: isErrorDelete,
		isSuccess: isSuccessDelete,
	} = useDeleteColaborator();
	const [openCreate, setOpenCreate] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [deleteId, setDeleteId] = useState<string>("");
	const [showImagePreview, setShowImagePreview] = useState<boolean>(true);
	const { imagePreview, setImagePreview, readImageFile } = useImagePreview();
	const imageInputRef = useRef<HTMLInputElement>(null);

	const initialValues = {
		collaboratorsFields: {
			title: "",
			image: new File([], ""),
		},
	};

	const form = useForm<CollaboratorFormValues>({
		resolver: zodResolver(collaboratorFormSchema),
		defaultValues: initialValues,
	});

	useEffect(() => {
		if (isSuccessCreate) {
			form.reset();
			setImagePreview(null);
		}
		if (isErrorCreate || isSuccessCreate) {
			setOpenCreate(false);
		}

		if (isErrorDelete || isSuccessDelete) {
			setOpenDelete(false);
		}
	}, [isErrorCreate, isErrorDelete, isSuccessCreate, isSuccessDelete, form, setImagePreview]);

	const handleSubmit = (data: CollaboratorFormValues) => {
		createColaborator(data);
	};

	const toggleImagePreview = () => {
		setShowImagePreview((x) => !x);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<any, string>) => {
		console.log(e);
		const image = e.target.files?.[0];
		if (!image) return;
		field.onChange(image);
		readImageFile(image);
	};

	const triggerImageInput = () => {
		imageInputRef.current?.click();
	};

	const handleDelete = (id: string) => {
		setDeleteId(id);
		setOpenDelete(true);
	};

	return (
		<div className="flex flex-col items-start gap-10">
			<div className="flex flex-wrap justify-end items-center gap-5 w-full">
				<Button onClick={() => setOpenCreate(true)}>Crear colaborador</Button>
			</div>

			<Modal title="Agrega un colaborador" description="" isOpen={openCreate} onClose={() => setOpenCreate(false)}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-8">
						<div className="flex flex-col md:flex-row items-start gap-5">
							<FormField
								formControl={form.control}
								name={"title"}
								label="Título"
								render={{
									renderProp: ({ field }) => <Input disabled={isPendingCreate} placeholder="Título" {...field} />,
								}}
							/>

							<FormField
								formControl={form.control}
								name={"image"}
								label="Imagen"
								render={{
									renderProp: ({ field }) => (
										<div className="flex flex-col justify-between items-center gap-5">
											<Button onClick={triggerImageInput}>Selecciona una imagen</Button>
											<Input
												className="hidden"
												type="file"
												disabled={isPendingCreate}
												{...field}
												ref={imageInputRef}
												onChange={(e) => handleImageChange(e, field)}
											/>
											{imagePreview && (
												<label className="flex justify-start items-center gap-1">
													<input type="checkbox" defaultChecked={showImagePreview} onChange={toggleImagePreview} />
													<Paragraph as="span" size="sm">
														Mostrar previsualización
													</Paragraph>
												</label>
											)}
											{showImagePreview && imagePreview ? (
												<img src={imagePreview} alt="" width={150} height={150} />
											) : null}
										</div>
									),
								}}
							/>
						</div>

						<Button disabled={isPendingCreate} className="mr-auto space-y-2" type="submit">
							Crear
						</Button>
					</form>
				</Form>
			</Modal>

			<Gallery isLoading={isLoading}>
				{data?.map((item) => (
					<Gallery.Image
						key={item.id}
						src={item.imageUrl}
						alt={`Imagen del colaborador ${item.title}`}
						className="h-48 object-contain">
						<Gallery.ImageHeading>{item.title}</Gallery.ImageHeading>
						<Gallery.ImageActions>
							<button
								type="button"
								className="hover:animate-pulse font-bold text-2xl"
								onClick={() => handleDelete(item.id)}>
								<Icons.close />
							</button>
						</Gallery.ImageActions>
					</Gallery.Image>
				))}
			</Gallery>

			<ConfirmModal
				title="¿Estás seguro que deseas eliminar esta imagen?"
				description="Una vez eliminado no se puede recuperar."
				confirmButtonLabel="Eliminar colaborador"
				isOpen={openDelete}
				onClose={() => setOpenDelete(false)}
				onConfirm={() => deleteColaborator(deleteId)}
				isDisabled={isPendingDelete}
				variant="destructive"
			/>
		</div>
	);
}
