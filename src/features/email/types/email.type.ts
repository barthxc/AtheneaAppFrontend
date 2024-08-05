import type { z } from "zod";
import type {
  emailLogFormSchema,
  emailComunicationFormSchema,
} from "@/features/email/schemas";

export type EmailLogFormValues = z.infer<typeof emailLogFormSchema>;

export type EmailComunicationFormValues = z.infer<
  typeof emailComunicationFormSchema
>;
