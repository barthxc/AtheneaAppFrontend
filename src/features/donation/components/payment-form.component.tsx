import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import PaymentFormView from "./payment-form-view.component";
import { useForm } from "react-hook-form";
import { useClientSecret, useConfirmCardPayment } from "../hooks/hook";
import type { DonationFormValues } from "../types/donation.type";
import { donationFormSchema } from "../schemas/donation-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const PaymentFormComponent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const {
    fetchClientSecret,
    isPending: clientSecretPending,
    errorMessage: clientSecretError,
  } = useClientSecret();

  const {
    mutate: confirmCardPayment,
    isPending: confirmPaymentPending,
    errorMessage: confirmPaymentError,
    isSuccess,
  } = useConfirmCardPayment();

  const defaultValues: DonationFormValues = {
    amount: 0,
    name: "",
  };

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: DonationFormValues) => {
    const { amount, name } = data;
    const clientSecret = await fetchClientSecret({
      name,
      amount: amount * 100,
    });

    const cardElement = elements?.getElement(CardElement);

    confirmCardPayment({
      stripe,
      cardElement,
      clientSecret,
      name,
    });
  };

  return (
    <>
      <p>gay</p>
      <PaymentFormView
        onSubmit={handleSubmit}
        stripe={!!stripe}
        error={confirmPaymentError || clientSecretError}
        success={isSuccess}
        loading={clientSecretPending || confirmPaymentPending}
        form={form}
        initialData={{}}
      />
    </>
  );
};

export default PaymentFormComponent;
