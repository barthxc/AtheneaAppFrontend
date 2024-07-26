import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type { EmailFormValues } from "@/features/email/types";

export interface EmailFormViewProps extends FormViewProps {
  form: UseFormReturn<EmailFormValues>;
}
