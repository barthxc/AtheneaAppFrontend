import { useToast } from "@/features/core/components/ui";
import { useMutation } from "@tanstack/react-query";
import {
  type ConfirmCardPaymentParams,
  type CreatePaymentIntentParams,
  DonationService,
} from "../services/donation.service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { ErrorService } from "@/features/error/service";

const useClientSecret = () => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async ({ name, amount }: CreatePaymentIntentParams) =>
      DonationService.createPaymentIntent({ name, amount: amount * 100 }),
    onSuccess: () => {},
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.DONATION.CREATE_PAYMENT_INTENT
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.DONATION.CREATE_PAYMENT_INTENT
      ),
    fetchClientSecret: mutation.mutateAsync,
  };
};

const useConfirmCardPayment = () => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: ConfirmCardPaymentParams) =>
      DonationService.ConfirmCardPayment(data),
    onSuccess: () => {
      toast({
        description: "Piola, joya",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.DONATION.CONFIRM_PAYMENT
        ),
      });
    },
  });
  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.DONATION.CONFIRM_PAYMENT
      ),
    confirmCardPayment: mutation.mutateAsync,
  };
};

export { useClientSecret, useConfirmCardPayment };
