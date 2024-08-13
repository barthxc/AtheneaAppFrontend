import { Separator } from "@/features/core/components/ui";
import { Heading, Link, Paragraph } from "@/features/landing/components";

export const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-stretch [&>*]:pt-24 [&>*]:pb-20">
      <section className="bg-[#3BA6FF] flex-1 flex flex-col gap-20 px-14">
        <div className="flex flex-col gap-10">
          <article className="flex flex-col gap-4">
            <Heading as="h3">Donar Ahora</Heading>
            <Paragraph>
              Tu aporte financiero puede marcar una gran diferencia. Cada
              donación se destina directamente a nuestros proyectos, ayudándonos
              a construir un futuro mejor para todos.
            </Paragraph>
            <Link to="#" className="font-medium text-base">
              Comienza Ahora
            </Link>
          </article>

          <Separator className="bg-black" />

          <article className="flex flex-col gap-4">
            <Heading as="h3">Conviértete en Socio</Heading>
            <Paragraph>
              Forma parte de nuestra comunidad y participa activamente en
              nuestros proyectos y actividades. Tu compromiso es clave para
              lograr nuestros objetivos.
            </Paragraph>
            <Link to="#" className="font-medium text-base">
              Comienza Ahora
            </Link>
          </article>
          <article className="flex flex-col gap-4">
            <Heading as="h3">Conviértete en Voluntario</Heading>
            <Paragraph>
              Únete a nuestro equipo de voluntarios apasionados y marca la
              diferencia con tu tiempo y habilidades.
            </Paragraph>
            <Link to="#" className="font-medium text-base">
              Contáctanos
            </Link>
          </article>
        </div>
      </section>

      <section className="flex-[2] flex flex-col gap-14 px-14">
        <Heading variant="display" size="2xl" className="text-white">
          Diversidad que nos une
        </Heading>
        <img
          src="/hero.jpg"
          alt=""
          className="w-full max-w-screen-md h-96 xl:h-[500px] object-cover"
        />
      </section>
    </div>
  );
};
