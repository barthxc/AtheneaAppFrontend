import { EmailForm } from "@/features/email/components";
//  https://api.whatsapp.com/send/?phone=34XXXXXX
const ContactPage = () => {
  return (
    <div className="flex flex-row items-center gap-20">
      <div>
        <div>
          <p>
            Puedes contactar también por WhatsApp! la imagen es un link hacia
            whatsapp. En pantalla pequeña se debería ver primero el formulario.
          </p>
        </div>
        <img
          className="max-w-60"
          src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_960_720.png"
          alt=""
        />
      </div>
      <EmailForm emailType="communication" />
    </div>
  );
};

export default ContactPage;
