import type { z } from "zod";
import type { collaboratorsFormSchema } from "@/features/content/schemas";

export type CollaboratorsFormValues = z.infer<typeof collaboratorsFormSchema>;
