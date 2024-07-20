import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/features/core/components/ui";
import { ERROR_MESSAGES } from "@/features/core/constants";

import { CalendarFormView } from "@/features/calendar/components";
import { calendarFormSchema } from "@/features/calendar/schemas";
import type { CalendarFormValues } from "@/features/calendar/types";

interface CalendarFormProps {
	initialData: any | null;
}

export const CalendarForm: React.FC<CalendarFormProps> = ({ initialData }) => {
	//   const params = useParams();
	//   const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	// const toastMessage = initialData ? "Product updated." : "Product created.";

	const defaultValues = initialData ?? {
		tittle: "",
		description: "",
	};

	const form = useForm<CalendarFormValues>({
		resolver: zodResolver(calendarFormSchema),
		defaultValues,
	});

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const onSubmit = async (data: CalendarFormValues) => {
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
		<CalendarFormView
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
