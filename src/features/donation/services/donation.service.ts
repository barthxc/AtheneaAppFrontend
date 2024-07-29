import { atheneaApi } from "@/features/core/lib/api";

interface CreatePaymentIntentResponse {
  clientSecret: string;
}

interface CreatePaymentIntentParams {
  amount: number;
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class DonationService {
  static createPaymentIntent = async (info: CreatePaymentIntentParams) => {
    try {
      const { data } = await atheneaApi.post<CreatePaymentIntentResponse>(
        "/payment/create-payment-intent",
        info
      );
      return data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to create PaymentIntent"
      );
    }
  };
}
