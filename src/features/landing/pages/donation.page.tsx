import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentFormComponent from "@/features/donation/components/payment-form.component";
import { Section } from "@/features/landing/components";

// Carga tu clave pública de Stripe desde las variables de entorno
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const DonationPage: React.FC = () => {
	return (
		<Section className="mt-20 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
			<div className="flex-1">
				<p className="">Test </p>
				<p className="text-3xl">También puedes hacer una transferencia a nuestro número de cuenta:</p>
				<p className="font-bold text-4xl">ES 313231323123231232323</p>
			</div>
			<div className="flex-[2]">
				<Elements stripe={stripePromise}>
					<PaymentFormComponent />
				</Elements>
			</div>
		</Section>
	);
};
