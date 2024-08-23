import type { z } from "zod";
import type { colaboratorFormSchema } from "../schemas/colaborator-form.schema";

export type ColaboratorFormValues = z.infer<typeof colaboratorFormSchema>;
