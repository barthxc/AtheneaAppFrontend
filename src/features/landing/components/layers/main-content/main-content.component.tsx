import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import { Icons } from "@/features/core/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/core/components/ui";

import { Heading, Paragraph, Section } from "@/features/landing/components";
import { cn } from "@/features/core/lib/utils";
import { About, Faq, News, Achievement } from "@/features/landing/components";

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

        <article className="flex justify-center items-start gap-10">
          <article className="max-w-sm text-center">
            <Heading as="h3" variant="display" className="mb-5">
              +400
            </Heading>
            <Paragraph>
              Nuestra asociación prospera gracias a la ayuda y esfuerzo de más
              de 400 socios.
            </Paragraph>
          </article>
        </article>
      </Section>

      <About />

      <News />

      <Achievement />
      <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
        <header className="flex flex-col gap-5">
          <Heading variant="display" position="centered">
            Colaboradores
          </Heading>
          <Paragraph className="text-center max-w-xl mx-auto">
            Carousel de imágenes de las empresas
          </Paragraph>
        </header>

        <Carousel
          opts={{ loop: false }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 sm:basis-1/5">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full max-w-[400px] object-cover select-none"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPreviousNext previous />
          <CarouselPreviousNext next />
        </Carousel>

        {/* <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
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
        </div> */}
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
