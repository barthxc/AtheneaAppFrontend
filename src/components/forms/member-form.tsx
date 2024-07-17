import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { MemberFormView } from "./views";
import type { MemberFormValues, Role } from "@/types";
import { memberFormSchema } from "@/schemas";

interface MemberFormProps {
	initialData: any | null;
	roles: Role[];
}

export const MemberForm: React.FC<MemberFormProps> = ({ initialData, roles }) => {
	//   const params = useParams();
	//   const router = useRouter();
	const { toast } = useToast();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	// const toastMessage = initialData ? "Socio actualizado." : "Socio creado.";

	const defaultValues = initialData
		? initialData
		: {
				name: "",
				description: "",
				price: 0,
				imgUrl: [],
				category: "",
			};

	const form = useForm<MemberFormValues>({
		resolver: zodResolver(memberFormSchema),
		defaultValues,
	});

	const onSubmit = async (data: MemberFormValues) => {
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
		<MemberFormView
			initialData={initialData}
			roles={roles}
			loading={loading}
			open={open}
			setOpen={setOpen}
			form={form}
			onSubmit={onSubmit}
			onDelete={onDelete}
		/>
	);
};
