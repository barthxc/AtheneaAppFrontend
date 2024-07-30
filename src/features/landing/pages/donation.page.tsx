import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentFormComponent from "@/features/donation/components/payment-form.component";

// Carga tu clave pública de Stripe desde las variables de entorno
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const DonationPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentFormComponent />
    </Elements>
  );
};

export default DonationPage;
