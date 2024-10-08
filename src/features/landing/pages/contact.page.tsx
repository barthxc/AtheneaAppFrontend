import { Link } from "react-router-dom";
import { ContactForm, Section, Paragraph } from "@/features/landing/components";

export const ContactPage = () => {
	return (
		<Section className="!pt-[8.5rem] flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20 min-h-[800px]">
			<div className="flex-1 flex flex-col gap-10 items-center justify-center">
				<Paragraph className="text-xl xl:text-3xl text-center">
					Contáctanos por <span className="font-bold text-green-500">WhatsApp</span>
				</Paragraph>
				<Link
					target="_blank"
					to={"https://api.whatsapp.com/send/?phone=34613111343"}
					aria-label="Enviar mensaje por WhatsApp">
					<img
						width={240}
						height={240}
						className="max-w-60"
						src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_960_720.png"
						alt="Icono de WhatsApp"
					/>
				</Link>
			</div>
			<div className="flex-[2]">
				<ContactForm />
			</div>
		</Section>
	);
};
