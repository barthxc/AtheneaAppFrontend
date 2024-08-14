import { Separator } from "@/features/core/components/ui";
import {
  Button,
  Heading,
  Link,
  Logo,
  Paragraph,
} from "@/features/landing/components";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 px-14 py-10">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-10 xl:gap-20 py-14">
        <section className="flex-1 flex flex-col gap-5">
          <header className="text-white">
            <Logo />
            <Paragraph className="max-w-xs">
              Capacidades diferentes, oportunidades iguales
            </Paragraph>
          </header>

          <ul className="flex justify-start flex-wrap gap-2 text-white max-w-xs">
            <li>
              <Link
                to="#"
                className="bg-white/50 hover:bg-[#FF521A] w-10 h-10 flex justify-center items-center">
                FB
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-white/50 hover:bg-[#FF521A] w-10 h-10 flex justify-center items-center">
                IN
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex-[2] flex flex-col 2xl:flex-row 2xl:justify-start 2xl:items-start gap-10 xl:gap-20">
          <div className="flex flex-col xl:flex-row xl:justify-start xl:items-start gap-10 xl:gap-20">
            <article className="text-white">
              <Heading as="h3" className="mb-3 xl:mb-5">
                Quick Links
              </Heading>
              <ul className="flex flex-col gap-3 xl:gap-5 text-lg">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">Nosotros</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendario</Link>
                </li>
                <li>
                  <Link to="/news">Noticias</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </article>

            <article className="text-white">
              <Heading as="h3" className="mb-3 xl:mb-5">
                Company
              </Heading>
              <ul className="flex flex-col gap-3 xl:gap-5 text-lg">
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Cookie Preferences</Link>
                </li>
              </ul>
            </article>
          </div>

          <article className="px-5 py-14 bg-[#FFEE93] flex flex-col justify-between gap-14 max-w-sm">
            <Heading as="h3" size="lg">
              ¿Tienes preguntas o quieres participar?
            </Heading>
            <Button asChild variant="accent" size="xl">
              <Link to="contact">Contactanos</Link>
            </Button>
          </article>
        </section>
      </div>

      <Separator className="bg-white/10 h-1" />

      <Paragraph className="text-white text-center">
        &copy; 2024 Athenea. All rights reserved.
      </Paragraph>
    </footer>
  );
};
