import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { MemberFormView } from "./views";
import {
	MemberHasDisability,
	MemberPaymentMethod,
	MemberStatus,
	MemberStreetType,
	type MemberFormValues,
} from "@/types";
import { memberFormSchema } from "@/schemas";
import { ERROR_MESSAGES } from "@/constants";

interface MemberFormProps {
	initialData: MemberFormValues | null;
}

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
				identificationNumber: "",
				status: MemberStatus.alta,
				email: "",
				birthDate: "",
				hasDisability: MemberHasDisability.no,
				gradeDisability: 0,
				observations: "",
				// paymentDate: new Date(),
				phoneInfo: {
					phone1: "",
					phone2: "",
				},
				addressInfo: {
					streetType: MemberStreetType.calle,
					streetName: "",
					door: "",
					postalCode: 0,
					location: "",
					province: "",
					block: "",
				},
				bankInfo: {
					paymentMethod: MemberPaymentMethod.caja,
					entity: "",
					iban: "",
					name: "",
					lastName: "",
					identificationNumber: "",
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
		console.log({ data });
		try {
			setLoading(true);
			if (initialData) {
				// await axios.post(`/api/products/edit-product/${initialData._id}`, data);
			} else {
				// const res = await axios.post(`/api/products/create-product`, data);
				// console.log("product", res);
			}
			//   router.refresh();
			//   router.push(`/dashboard/products`);
			toast({
				variant: "destructive",
				title: ERROR_MESSAGES.GENERIC.SOMETHING_WENT_WRONG,
				description: ERROR_MESSAGES.GENERIC.PROBLEM_WITH_REQUEST,
			});
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: ERROR_MESSAGES.GENERIC.SOMETHING_WENT_WRONG,
				description: ERROR_MESSAGES.GENERIC.PROBLEM_WITH_REQUEST,
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
