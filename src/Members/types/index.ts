import { z } from "zod";
import { memberFormSchema } from "../schemas";
export type MemberFormValues = z.infer<typeof memberFormSchema>;
