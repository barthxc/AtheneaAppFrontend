import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { ModalProps } from "@/features/core/components/ui/modal";

export interface UploadImageModalProps<TFieldValues extends FieldValues> extends ModalProps {
	form: UseFormReturn<TFieldValues, any>;
	handleSubmit: (data: TFieldValues) => any;
	isLoading: boolean;
	isSuccess: boolean;
	customElements?: {
		additionalFields?: React.ReactNode;
		fieldsContainer?: (children: React.ReactNode) => React.ReactNode;
	};
}
