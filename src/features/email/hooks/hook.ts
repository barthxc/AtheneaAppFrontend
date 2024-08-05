import { useMutation } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { useToast } from "@/features/core/components/ui";
import { EmailService } from "../services";
import type { SendEmail } from "../services";

/* TODO: Use only one hook if its possible */
const useSendEmail = () => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: SendEmail) => EmailService.sendEmail(data),
    onSuccess: () => {
      toast({
        description: "Mensaje enviado correctamente",
      });
      return true;
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.EMAIL.SEND_EMAIL
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
        ERROR_MESSAGES.MEMBER.CREATE
      ),
  };
};

export { useSendEmail };
