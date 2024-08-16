import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import type { EmailComunicationFormValues, EmailLogFormValues } from "@/features/email/types";
import { emailComunicationFormSchema, emailLogFormSchema } from "@/features/email/schemas";
import EmailFormView from "./email-form-view.component";
import { useSendEmail } from "../hooks/hook";
import { cn } from "@/features/core/lib/utils";

export type EmailType = "log" | "communication";

export interface EmailFormComponentProps extends React.HTMLAttributes<HTMLElement> {
	emailType: EmailType;
	render?: {
		heading?: React.ReactElement;
		input?: React.ReactElement;
		textarea?: React.ReactElement;
		button?: React.ReactElement;
		paragraph?: React.ReactElement;
		errorParagraph?: React.ReactElement;
	};
}

export const EmailForm = ({ className, emailType, render }: EmailFormComponentProps) => {
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
			<div className={cn("bg-white shadow-lg rounded-lg p-8", className)}>
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
					render={render}
				/>
				{isSuccess && <p className="text-center text-green-400 font-bold">¡Email enviado correctamente!</p>}
			</div>
		</>
	);
};
