import type { z } from "zod";

import type { memberFormSchema } from "@/features/members/schemas";

export type MemberFormValues = z.infer<typeof memberFormSchema>;
