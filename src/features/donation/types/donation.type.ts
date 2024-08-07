import type { z } from "zod";
import type { donationFormSchema } from "@/features/donation/schemas/donation-form.schema";
export type DonationFormValues = z.infer<typeof donationFormSchema>;
