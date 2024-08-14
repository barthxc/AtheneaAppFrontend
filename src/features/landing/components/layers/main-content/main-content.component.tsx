import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import { Icons } from "@/features/core/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/core/components/ui";

import {
  Button,
  Heading,
  Paragraph,
  Progress,
  Section,
} from "@/features/landing/components";
import { cn } from "@/features/core/lib/utils";
import { About, Faq } from "@/features/landing/components";

export const MainContent = () => {
  return (
    <main>
      <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
        <Heading variant="display" position="centered">
          Nuestras Instalaciones
        </Heading>

        <Carousel
          opts={{ loop: false }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
            <CarouselItem>
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-h-[600px] object-cover select-none"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-h-[600px] object-cover select-none"
              />
            </CarouselItem>

            <CarouselItem>
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-h-[600px] object-cover select-none"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPreviousNext previous />
          <CarouselPreviousNext next />
        </Carousel>

        <section className="flex justify-center items-start gap-10">
          <article className="max-w-sm text-center">
            <Heading as="h3" variant="display" className="mb-5">
              +400
            </Heading>
            <Paragraph>
              Nuestra asociación prospera gracias a la ayuda y esfuerzo de más
              de 400 socios.
            </Paragraph>
          </article>
        </section>
      </Section>

      <About />

      <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
        <Heading variant="display" position="centered">
          Últimas noticias
        </Heading>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
          <article className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
            <img
              src="/hero.jpg"
              alt=""
              className="w-full max-h-80 object-cover"
            />
            <Heading as="h3">Título de la Noticia</Heading>
            <Paragraph>
              Descripción de la noticia cortada por puntos....
            </Paragraph>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center font-medium text-lg">
                <Paragraph as="span">$8,520</Paragraph>
                <Paragraph as="span">50%</Paragraph>
              </div>
              <Paragraph as="span" size="sm" className="uppercase">
                Raised of $17,000
              </Paragraph>
              <Progress value={50} />
            </div>

            <Button className="mt-6" variant="ghost">
              Donate Now
            </Button>
          </article>
        </div>

        <Button
          asChild
          variant="accent"
          size="lg"
          className="w-max"
          position="centered">
          <Link to="#">Ver todas las noticias</Link>
        </Button>
      </Section>

      <Section variant="unfilled">
        <article className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
          <div className="flex-1 flex flex-col gap-10">
            <header className="flex flex-col gap-5">
              <Heading variant="display" className="text-white max-w-2xl">
                Mejoramos Vidas
              </Heading>
              <Paragraph className="text-white">
                A lo largo de los años, Athenea ha dejado una huella
                significativa en la vida de muchas personas y comunidades. A
                continuación, destacamos algunos de los logros más importantes
                de nuestro trabajo:
              </Paragraph>
            </header>

            <ul className="[&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:text-white flex flex-col gap-5">
              <li>
                <Heading as="h3" className="text-white">
                  Educación y Capacitación para Todos
                </Heading>
                <Paragraph>
                  Hemos ofrecido clases de informática y talleres de
                  manualidades a personas con discapacidades, proporcionándoles
                  nuevas habilidades y oportunidades para su desarrollo personal
                  y profesional.
                </Paragraph>
              </li>
              <li>
                <Heading as="h3" className="text-white">
                  Acceso a Terapias y Rehabilitación
                </Heading>
                <Paragraph>
                  A través de nuestras sesiones de maderoterapia y la atención
                  de un fisioterapeuta especializado, hemos ayudado a mejorar la
                  calidad de vida de nuestros miembros, promoviendo su bienestar
                  físico y emocional.
                </Paragraph>
              </li>
              <li>
                <Heading as="h3" className="text-white">
                  Promoción de la Inclusión Social
                </Heading>
                <Paragraph>
                  Con nuestras excursiones y actividades recreativas, hemos
                  fomentado la integración y la visibilidad de las personas con
                  discapacidades, creando espacios donde todos puedan disfrutar
                  y participar plenamente.
                </Paragraph>
              </li>
              <li>
                <Heading as="h3" className="text-white">
                  Fortalecimiento y Apoyo Continuo
                </Heading>
                <Paragraph>
                  Ofrecemos un gimnasio adaptado para fortalecer la
                  independencia física y emocional de nuestros miembros, así
                  como un entorno de apoyo y comprensión para enfrentar los
                  desafíos diarios.
                </Paragraph>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col gap-10">
            <img
              src="/hero.jpg"
              alt=""
              className="h-96 xl:h-[450px] object-cover"
            />
            <div className="grid grid-cols-2 gap-10">
              <img
                src="/hero.jpg"
                alt=""
                className="aspect-square object-cover"
              />
              <img
                src="/hero.jpg"
                alt=""
                className="aspect-square object-cover rounded-full"
              />
            </div>
          </div>
        </article>
      </Section>

      <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
        <header className="flex flex-col gap-5">
          <Heading variant="display" position="centered">
            Colaboradores
          </Heading>
          <Paragraph className="text-center max-w-xl mx-auto">
            Meet the dedicated individuals who drive Athenea forward. Our team
            is made up of passionate individuals with diverse backgrounds and
            expertise
          </Paragraph>
        </header>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
          <article className="bg-[#FFD9CD] max-w-sm flex flex-col relative">
            <header className="flex flex-col gap-2 p-5">
              <Heading as="h3">David Warner</Heading>
              <Paragraph as="span">Founder</Paragraph>
            </header>
            <img
              src="/hero.jpg"
              alt=""
              className="w-full h-[400px] object-cover"
            />
            <Link
              to="#"
              className="w-16 h-16 bg-white hover:bg-[#FFD9CD] p-2 flex justify-center items-center absolute bottom-5 left-5">
              <Icons.arrowRightCustom />
            </Link>
          </article>

          <article className="bg-[#C9FFE1] max-w-sm flex flex-col relative">
            <header className="flex flex-col gap-2 p-5">
              <Heading as="h3">David Warner</Heading>
              <Paragraph as="span">Founder</Paragraph>
            </header>
            <img
              src="/hero.jpg"
              alt=""
              className="w-full h-[400px] object-cover"
            />
            <Link
              to="#"
              className="w-16 h-16 bg-white hover:bg-[#C9FFE1] p-2 flex justify-center items-center absolute bottom-5 left-5">
              <Icons.arrowRightCustom />
            </Link>
          </article>
        </div>
      </Section>

      <Faq />
    </main>
  );
};

export interface CarouselPreviousNextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  previous?: boolean;
  next?: boolean;
}

const CarouselPreviousNext = ({
  previous,
  next,
  className,
  ...restProps
}: CarouselPreviousNextProps) => {
  const props = {
    className: cn(
      "w-10 h-10 xl:w-16 xl:h-16 rounded-none border-none bg-[#FF521A] hover:bg-[#FF521A] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6",
      previous ? "xl:translate-x-4" : next ? "xl:-translate-x-4" : null,
      className
    ),
    ...restProps,
  };

  if (previous) {
    return (
      <CarouselPrevious {...props}>
        <Icons.arrowLeftCustom className="[&>path]:stroke-white" />
      </CarouselPrevious>
    );
  }

  return (
    <CarouselNext {...props}>
      <Icons.arrowRightCustom className="[&>path]:stroke-white" />
    </CarouselNext>
  );
};
