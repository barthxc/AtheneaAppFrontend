import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { DonationService } from "../services/donation.service";
import PaymentFormView from "./payment-form-view.component";

const PaymentFormComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  const fetchClientSecret = async (amount: number) => {
    setLoading(true);
    try {
      const response = await DonationService.createPaymentIntent({
        amount: amount * 100,
      });
      setClientSecret(response.clientSecret);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch clientSecret:", err);
      setError("Failed to fetch payment information.");
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // Obtener el clientSecret solo cuando se envía el formulario
    await fetchClientSecret(amount);

    if (!stripe || !elements || !clientSecret) {
      setError("Stripe is not loaded or clientSecret is missing.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError("Card element not found.");
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Customer Name", // Puede ser un valor dinámico
            },
          },
        }
      );

      if (error) {
        setError(error.message || "An unexpected error occurred.");
        setSuccess(false);
      } else if (paymentIntent?.status === "succeeded") {
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setSuccess(false);
    }
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseFloat(event.target.value));
  };

  return (
    <PaymentFormView
      onSubmit={handleSubmit}
      stripe={!!stripe}
      error={error}
      success={success}
      amount={amount}
      onAmountChange={handleAmountChange}
      loading={loading}
    />
  );
};

export default PaymentFormComponent;
