import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type { EmailComunicationFormValues, EmailLogFormValues } from "@/features/email/types";
import type { EmailFormComponentProps } from "@/features/email/components";

export interface EmailFormViewProps extends FormViewProps, Pick<EmailFormComponentProps, "emailType" | "render"> {
	form: UseFormReturn<EmailLogFormValues | EmailComunicationFormValues>;
}
