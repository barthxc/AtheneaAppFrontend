import type { z } from "zod";
import type { collaboratorFormSchema } from "@/features/content/schemas";

export type CollaboratorsFormValues = z.infer<typeof collaboratorFormSchema>;
