import type { z } from "zod";
import type { memberFormSchema } from "../schemas";
export type MemberFormValues = z.infer<typeof memberFormSchema>;
