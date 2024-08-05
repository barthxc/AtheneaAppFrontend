import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import type { EmailLogFormValues } from "@/features/email/types";
import { emailLogFormSchema } from "@/features/email/schemas";
import EmailFormView from "./email-form-view.component";
import { useSendEmail } from "../hooks/hook";

export const EmailForm = () => {
  const [showModal, setShowModal] = useState(false);

  const { isPending, isSuccess, mutate: sendEmail } = useSendEmail();

  const defaultValues: EmailLogFormValues = {
    title: "",
    msg: "",
  };

  const form = useForm<EmailLogFormValues>({
    resolver: zodResolver(emailLogFormSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = async (data: EmailLogFormValues) => {
    const dataEmail = {
      ...data,
      emailType: "log",
    };
    sendEmail(dataEmail);
    if (isSuccess) {
      form.reset();
      return;
    }
  };

  return (
    <>
      <EmailFormView
        initialData={{}}
        onDelete={async () => {}}
        loading={isPending}
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
        form={form}
        onSubmit={onSubmit}
      />
      {isSuccess && <p>Email enviado correctamente!</p>}
    </>
  );
};
