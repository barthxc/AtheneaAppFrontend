import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Paragraph, ToastAction, useToast } from "@/features/core/components/ui";
import { ERROR_MESSAGES } from "@/features/core/constants";

import {
	type MemberFormProps,
	type MemberFormValues,
	MemberIsDisabled,
	MemberPaymentMethod,
	MemberStatus,
	MemberStreetType,
} from "@/features/members/types";
import { MemberFormView } from "@/features/members/components";
import { memberFormSchema } from "@/features/members/schemas";
import { MemberService } from "@/features/members/services";
import { Link } from "react-router-dom";
import { ErrorService } from "@/features/error/service";

export const MemberForm: React.FC<MemberFormProps> = ({ initialData }) => {
	//   const params = useParams();
	//   const router = useRouter();
	const { toast } = useToast();
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	// const toastMessage = initialData ? "Socio actualizado." : "Socio creado.";

	const defaultValues: MemberFormValues = initialData
		? initialData
		: {
				name: "",
				lastName: "",
				identificationNumber: undefined,
				status: MemberStatus.alta,
				email: undefined,
				birthDate: "",
				isDisabled: MemberIsDisabled.no,
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

	const onSubmit = async (data: MemberFormValues) => {
		setLoading(true);
		try {
			const createdMember = await MemberService.createMember(data);
			if (createdMember) {
				toast({
					description: "Socio creado con éxito",
					action: (
						<ToastAction altText="View PDF">
							<Link to="https://athenea-app-backend.vercel.app" target="_blank" rel="noreferrer noopener">
								Ver PDF
							</Link>
						</ToastAction>
					),
				});
				form.reset();
				console.log(createdMember);
				return;
			}
			toast({
				variant: "destructive",
				description: ERROR_MESSAGES.REQUEST.MEMBER.CREATE_MEMBER.GENERIC,
			});
		} catch (error: any) {
			const errorMessage = ErrorService.handleError(error.statusCode, ERROR_MESSAGES.REQUEST.MEMBER.CREATE_MEMBER);
			console.log(error);
			toast({
				variant: "destructive",
				description: errorMessage,
			});
		} finally {
			setLoading(false);
		}
	};

	const onDelete = async () => {
		try {
			setLoading(true);
			//   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
			//   router.refresh();
			//TODO REFRESCAR AL HACER COSAS (?)
		} catch (error: any) {
			// console.error(error)
		} finally {
			setLoading(false);
			closeModal();
		}
	};

	return (
		<MemberFormView
			initialData={initialData}
			loading={loading}
			showModal={showModal}
			openModal={openModal}
			closeModal={closeModal}
			form={form}
			onSubmit={onSubmit}
			onDelete={onDelete}
		/>
	);
};
