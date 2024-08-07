import { z } from "zod";

export const donationFormSchema = z.object({
  amount: z.number().min(1, "La cantidad debe ser mayor a 0"),
  name: z.string().optional().default("anónimo"),
});
