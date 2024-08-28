import { atheneaApi } from "@/features/core/lib/api";
import type { Stripe, StripeCardElement } from "@stripe/stripe-js";
export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

export interface CreatePaymentIntentParams {
  name: string;
  amount: number;
}

export interface ConfirmCardPaymentParams {
  stripe: Stripe | null;
  cardElement: StripeCardElement | undefined | null;
  clientSecret: string | undefined;
  name?: string;
}

export class DonationService {
  static createPaymentIntent = async (info: CreatePaymentIntentParams) => {
    try {
      const AmoutToCent = info.amount / 100;
      const { data } = await atheneaApi.post<CreatePaymentIntentResponse>(
        "/payment/create-payment-intent",
        { ...info, amount: AmoutToCent }
      );
      return data.clientSecret;
    } catch (error: any) {
      console.log(error);
      throw error.response?.data;
    }
  };

  static ConfirmCardPayment = async (data: ConfirmCardPaymentParams) => {
    const { stripe, cardElement, clientSecret, name } = data;

    if (!stripe || !cardElement || !clientSecret) {
      throw new Error("eoeoeoeooeeoeo");
    }

    try {
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: name || "anónimo",
          },
        },
      });
      return paymentIntent;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getPayments = async () => {};
}
