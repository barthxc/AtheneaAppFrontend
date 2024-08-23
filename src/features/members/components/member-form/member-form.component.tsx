import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, ToastAction, useToast } from "@/features/core/components/ui";
import {
	type MemberFormProps,
	type MemberFormValues,
	MemberPaymentMethod,
	MemberStatus,
	MemberStreetType,
} from "@/features/members/types";
import { MemberFormView } from "@/features/members/components";
import { memberFormSchema } from "@/features/members/schemas";

import { useDeleteMember, useUpdatePaymentDate } from "@/features/members/hooks";

export const MemberForm: React.FC<MemberFormProps> = ({
	memberId,
	initialData,
	isEdit,
	onSubmit,
	isLoading,
	isPending,
}) => {
	const { toast } = useToast();
	const [showModal, setShowModal] = useState(false);

	const { mutate: updateMemberPaymentDate, isPending: isPendingUpdatePaymentDate } = useUpdatePaymentDate();
	const { mutate: deleteMember, isPending: isPendingDeleteMember } = useDeleteMember();

	const defaultValues: MemberFormValues = initialData
		? initialData
		: {
				name: "",
				lastName: "",
				identificationNumber: undefined,
				status: MemberStatus.alta,
				email: undefined,
				birthDate: "",
				isDisabled: false,
				gradeDisability: 0,
				observations: undefined,
				// paymentDate: new Date(),
				phoneInfo: {
					phone1: "",
					phone2: undefined,
				},
				addressInfo: {
					streetType: MemberStreetType.calle,
					streetName: undefined,
					door: undefined,
					postalCode: undefined,
					location: undefined,
					province: undefined,
					block: undefined,
				},
				bankInfo: {
					paymentMethod: MemberPaymentMethod.caja,
					entity: undefined,
					iban: undefined,
					name: undefined,
					lastName: undefined,
					identificationNumber: undefined,
				},
			};

	const form = useForm<MemberFormValues>({
		resolver: zodResolver(memberFormSchema),
		defaultValues,
		// Validation strategy before submitting.
		// See: https://react-hook-form.com/docs/useform#mode
		mode: "all",
		// After submitting.
		// See: https://react-hook-form.com/docs/useform#reValidateMode
		reValidateMode: "onChange",
	});

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const onSuccessAction = (memberId: string) => {
		toast({
			description: isEdit ? "Socio actualizado" : "Socio creado con éxito",
			action: !isEdit ? (
				<ToastAction altText="Ficha de Socio">
					<Link to={`/dashboard/members/pdf/${memberId}`}>Ficha de Socio</Link>
				</ToastAction>
			) : undefined,
		});
	};

	const handleSubmit = (data: MemberFormValues) => {
		onSubmit(data, onSuccessAction);
		!isEdit && form.reset();
		return;
	};

	const onDelete = async () => {
		deleteMember(memberId ?? "");
		closeModal();
	};

	const onUpdatePaymentDate = async () => {
		updateMemberPaymentDate(memberId ?? "");
	};

	return (
		<>
			<MemberFormView
				initialData={initialData}
				loading={isLoading || isPending}
				showModal={showModal}
				openModal={openModal}
				closeModal={closeModal}
				form={form}
				onSubmit={handleSubmit}
				onDelete={onDelete}
			/>

			{isEdit && (
				<div className="flex flex-row justify-around">
					<Button
						disabled={isLoading || isPendingUpdatePaymentDate || isPendingDeleteMember}
						className="h-12 text-base"
						type="button">
						<Link to={`/dashboard/members/pdf/${memberId}`}>Ficha de Socio</Link>
					</Button>
					<Button
						disabled={isLoading || isPendingUpdatePaymentDate || isPendingDeleteMember}
						className=" h-12 text-base"
						type="button"
						onClick={onUpdatePaymentDate}>
						Actualizar fecha pago
					</Button>
				</div>
			)}
		</>
	);
};
