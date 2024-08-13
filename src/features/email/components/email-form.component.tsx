import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import type { EmailComunicationFormValues, EmailLogFormValues } from "@/features/email/types";
import { emailComunicationFormSchema, emailLogFormSchema } from "@/features/email/schemas";
import EmailFormView from "./email-form-view.component";
import { useSendEmail } from "../hooks/hook";

export type EmailType = "log" | "communication";

interface EmailFormComponentProps {
	emailType: EmailType;
}

export const EmailForm = ({ emailType }: EmailFormComponentProps) => {
	const [showModal, setShowModal] = useState(false);

	const { isPending, isSuccess, mutate: sendEmail } = useSendEmail();

	const defaultLogValues: EmailLogFormValues = {
		title: "",
		msg: "",
	};

	const defaultCommunicationValues: EmailComunicationFormValues = {
		from: "",
		title: "",
		msg: "",
	};

	const form = useForm<EmailLogFormValues | EmailComunicationFormValues>({
		resolver: zodResolver(emailType === "log" ? emailLogFormSchema : emailComunicationFormSchema),
		defaultValues: emailType === "log" ? defaultLogValues : defaultCommunicationValues,
		mode: "all",
		reValidateMode: "onChange",
	});

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	useEffect(() => {
		if (isSuccess) {
			form.reset();
		}
	}, [isSuccess, form]);

	const onSubmit = async (data: EmailLogFormValues) => {
		const dataEmail = {
			...data,
			emailType,
		};
		sendEmail(dataEmail);
	};

	return (
		<>
			<div className="bg-white shadow-lg rounded-lg p-8">
				<EmailFormView
					initialData={{}}
					onDelete={async () => {}}
					loading={isPending}
					showModal={showModal}
					openModal={openModal}
					closeModal={closeModal}
					form={form}
					onSubmit={onSubmit}
					emailType={emailType}
				/>
				{isSuccess && <p className="text-center text-green-400 font-bold">¡Email enviado correctamente!</p>}
			</div>
		</>
	);
};
