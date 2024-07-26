import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/features/core/components/ui";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { ErrorService } from "@/features/error/service";
import type { EmailFormValues } from "@/features/email/types";
import { emailFormSchema } from "@/features/email/schemas";
import EmailFormView from "./email-form-view.component";
import { EmailService } from "@/features/email/services";

export const EmailForm = () => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!emailSubmitted) return;
    toast({
      description: "Email Enviado",
    });
  }, [emailSubmitted, toast]);

  const defaultValues: EmailFormValues = {
    title: "",
    msg: "",
  };

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = async (data: EmailFormValues) => {
    setLoading(true);
    try {
      const emailSubmitted = await EmailService.sendEmail(data);
      if (emailSubmitted) {
        setEmailSubmitted(true);
        form.reset();
        return;
      }
      toast({
        variant: "destructive",
        description: ERROR_MESSAGES.EMAIL.SEND_EMAIL.GENERIC,
      });
    } catch (error: any) {
      const errorMessage = ErrorService.handleError(
        error.statusCode,
        ERROR_MESSAGES.EMAIL.SEND_EMAIL
      );
      toast({
        variant: "destructive",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <EmailFormView
        initialData={{}}
        onDelete={async () => {}}
        loading={loading}
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
        form={form}
        onSubmit={onSubmit}
      />
    </>
  );
};
