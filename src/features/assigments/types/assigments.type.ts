import type { z } from "zod";
import type { assignmentGiveFormSchema } from "@/features/assigments/schemas";

export type AssignmentGiveFormValues = z.infer<typeof assignmentGiveFormSchema>;
