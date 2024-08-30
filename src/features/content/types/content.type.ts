import type { z } from "zod";
import type { contentFormSchema } from "@/features/content/schemas";

export type ContentFormValues = z.infer<typeof contentFormSchema>;
