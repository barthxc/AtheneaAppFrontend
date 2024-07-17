import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

import { CalendarFormView } from "./views";
import { calendarFormSchema } from "@/schemas";
import type { CalendarFormValues, Category } from "@/types";

interface ProductFormProps {
	initialData: any | null;
	categories: Category[];
}

export const CalendarForm: React.FC<ProductFormProps> = ({ initialData, categories }) => {
	//   const params = useParams();
	//   const router = useRouter();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	// const toastMessage = initialData ? "Product updated." : "Product created.";

	const defaultValues = initialData ?? {
		name: "",
		description: "",
		price: 0,
		imgUrl: [],
		category: "",
	};

	const form = useForm<CalendarFormValues>({
		resolver: zodResolver(calendarFormSchema),
		defaultValues,
	});

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
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
			});
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
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
			setOpen(false);
		}
	};

	return (
		<CalendarFormView
			initialData={initialData}
			loading={loading}
			categories={categories}
			open={open}
			setOpen={setOpen}
			form={form}
			onSubmit={onSubmit}
			onDelete={onDelete}
		/>
	);
};
