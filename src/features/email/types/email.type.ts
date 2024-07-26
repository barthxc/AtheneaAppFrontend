import type { z } from "zod";
import type { emailFormSchema } from "../schemas/email-from.schema";
export type EmailFormValues = z.infer<typeof emailFormSchema>;
