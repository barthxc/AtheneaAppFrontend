import type { z } from "zod";

import type { memberFormSchema } from "@/features/members/schemas";

export type MemberFormValues = z.infer<typeof memberFormSchema>;

export type MemberStatus = "baja" | "alta" | "exitud";
export type MemberStreetType =
  | "avenida"
  | "barriada"
  | "plaza"
  | "calle"
  | "via";
export type MemberPaymentMethod = "caja" | "banco";
