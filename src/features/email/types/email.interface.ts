import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type {
  EmailComunicationFormValues,
  EmailLogFormValues,
} from "@/features/email/types";

// export interface EmailLogFormViewProps extends FormViewProps {
//   form: UseFormReturn<EmailComunicationFormValues>;
// }
// export interface EmailComunicationFormViewProps extends FormViewProps {
//   form: UseFormReturn<EmailLogFormValues>;
// }

export interface EmailFormViewProps extends FormViewProps {
  form: UseFormReturn<EmailLogFormValues | EmailComunicationFormValues>;
}
