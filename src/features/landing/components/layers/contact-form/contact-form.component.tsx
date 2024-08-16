import { cn } from "@/features/core/lib/utils";
import { EmailForm } from "@/features/email/components";

import { Button, type ContactFormProps, Heading, Input, Paragraph, Textarea } from "@/features/landing/components";

export const ContactForm = ({ className, ...props }: ContactFormProps) => {
	return (
		<EmailForm
			className={cn("rounded-none shadow-none bg-white text-white", className)}
			emailType="communication"
			render={{
				heading: <Heading />,
				input: <Input />,
				paragraph: <Paragraph />,
				errorParagraph: <Paragraph />,
				textarea: <Textarea />,
				button: <Button variant="accent" />,
			}}
			{...props}
		/>
	);
};
