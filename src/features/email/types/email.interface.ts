import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type {
  EmailComunicationFormValues,
  EmailLogFormValues,
} from "@/features/email/types";
import type { EmailType } from "../components";

export interface EmailFormViewProps extends FormViewProps {
  form: UseFormReturn<EmailLogFormValues | EmailComunicationFormValues>;
  emailType: EmailType;
}
