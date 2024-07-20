import { FormViewProps } from "@/types";
import type { UseFormReturn } from "react-hook-form";
import { MemberFormValues } from "..";

export interface MemberFormProps {
  initialData: MemberFormValues | null;
}

export interface MemberFormViewProps extends FormViewProps {
  form: UseFormReturn<MemberFormValues>;
}
