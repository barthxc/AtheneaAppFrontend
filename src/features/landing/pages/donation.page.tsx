import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useToast } from "@/features/core/components/ui";
import PaymentFormComponent from "@/features/donation/components/payment-form.component";
import { Section, Paragraph } from "@/features/landing/components";

// Carga tu clave pública de Stripe desde las variables de entorno
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const DonationPage: React.FC = () => {
  const { toast } = useToast();
  const accountNumber = "ES45 2100 7162 5023 0006 2893";

  const handleCopyToClipbard = () => {
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
          Si prefieres, puedes hacer tu donación mediante una transferencia
          bancaria:
        </Paragraph>
        <Paragraph
          className="text-2xl xl:text-3xl text-center font-bold pt-4 cursor-pointer"
          onClick={handleCopyToClipbard}>
          {accountNumber}
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
