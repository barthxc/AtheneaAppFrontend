import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";
import type { MemberFormValues } from "@/features/members/types";

export interface MemberFormProps {
	initialData: MemberFormValues | null;
}

export interface MemberFormViewProps extends FormViewProps {
	form: UseFormReturn<MemberFormValues>;
}
