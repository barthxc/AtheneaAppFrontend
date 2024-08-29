import type { z } from "zod";
import type { collaboratorFormSchema } from "@/features/content/schemas";

export type CollaboratorFormValues = z.infer<typeof collaboratorFormSchema>;
