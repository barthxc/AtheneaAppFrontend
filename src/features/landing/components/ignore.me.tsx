import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui";

import { Heading, Paragraph, Section } from "@/features/landing/components";
export const IgnoreMe = () => {
  return (
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
  );
};
