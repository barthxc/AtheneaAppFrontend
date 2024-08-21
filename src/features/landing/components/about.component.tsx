import { Link } from "react-router-dom";

import {
  Button,
  Heading,
  Paragraph,
  Section,
} from "@/features/landing/components";

export const About = () => {
  return (
    <Section
      variant="unfilled"
      className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
      <figure className="flex-1">
        <img
          src="/about.webp"
          alt="Imagen en evento de ventas de manualidades con la directora de la asociación y socios"
          className="w-full h-96 xl:h-[700px] object-cover"
        />
      </figure>
      <article className="flex flex-col gap-5 xl:gap-10 flex-1">
        <Heading variant="display" className="text-white max-w-2xl">
          Sobre Nosotros
        </Heading>
        <Paragraph className="text-base xl:text-xl text-white">
          Fundada en 2010, Athenea ha sido no solo centro de actividades si no
          un lugar de convivencia inclusiva donde podemos disfrutar de las
          actividades y eventos que se organizan para sensibilizar a la sociedad
          las discapacidades
        </Paragraph>
        <Button asChild variant="accent" size="lg" className="w-max">
          <Link to="/about">Leer más</Link>
        </Button>
      </article>
    </Section>
  );
};
