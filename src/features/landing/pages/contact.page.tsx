import { EmailForm } from "@/features/email/components";
import { Section } from "@/features/landing/components";

//  https://api.whatsapp.com/send/?phone=34XXXXXX
export const ContactPage = () => {
	return (
		<Section className="pt-[8.5rem] flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20 min-h-[800px] ">
			<div className="flex-1 flex flex-col gap-10 items-center justify-center">
				<p className="text-3xl">También puedes contactar con nosotros por whatsapp haciendo click en la imagen</p>
				<img
					className="max-w-60"
					src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_960_720.png"
					alt=""
				/>
			</div>
			<div className="flex-[2]">
				<EmailForm emailType="communication" />
			</div>
		</Section>
	);
};
