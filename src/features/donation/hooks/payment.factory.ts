import { createQueryKeys } from "@lukemorales/query-key-factory";
import { DonationService } from "@/features/donation/services";

export const PaymentApiFactory = createQueryKeys("payments", {
  getPayments: () => ({
    queryKey: ["getPayments"],
    queryFn: () => DonationService.getPayments(),
  }),
});
