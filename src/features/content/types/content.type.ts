import type { z } from "zod";
import type { contentFormSchema, contentImageFormSchema } from "@/features/content/schemas";

export type ContentFormValues = z.infer<typeof contentFormSchema>;
export type ContentImageFormValues = z.infer<typeof contentImageFormSchema>;
