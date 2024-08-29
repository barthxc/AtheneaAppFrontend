import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useToast } from "@/features/core/components/ui";
import PaymentFormComponent from "@/features/donation/components/payment-form.component";
import { Section, Paragraph, Link } from "@/features/landing/components";

// Carga tu clave pública de Stripe desde las variables de entorno
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const DonationPage: React.FC = () => {
	const { toast } = useToast();
	const accountNumber = "ES45 2100 7162 5023 0006 2893";

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(accountNumber).then(() => {
			toast({
				description: "Copiado en el portapapeles",
				variant: "default",
			});
		});
	};

	return (
		<Section className="mt-20 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
			<div className="flex-1">
				<Paragraph className="text-xl xl:text-2xl text-center">
					Puedes apoyar a nuestra asociación de discapacitados de las siguientes maneras:
				</Paragraph>
				<Paragraph className="text-lg xl:text-xl text-center mt-4">
					1. <b>Transferencia bancaria</b>: Si prefieres hacer una donación mediante transferencia bancaria, utiliza los
					siguientes datos:
				</Paragraph>
				<Paragraph
					className="text-2xl xl:text-3xl text-center font-bold pt-4 cursor-pointer"
					onClick={handleCopyToClipboard}>
					{accountNumber}
				</Paragraph>
				<Paragraph className="text-sm xl:text-base text-center mt-2">
					Haz clic en el número para copiarlo y utilizarlo en tu transferencia. Si tienes alguna pregunta, no dudes en{" "}
					<Link to="contact" className="text-[#094074]">
						contactarnos
					</Link>
					.
				</Paragraph>
			</div>
			<div className="flex-[2]">
				<Elements stripe={stripePromise}>
					<PaymentFormComponent />
				</Elements>
			</div>
		</Section>
	);
};
