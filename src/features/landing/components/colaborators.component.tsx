import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui";
import Autoplay from "embla-carousel-autoplay";

import { Heading, Paragraph, Section } from "@/features/landing/components";
import { useColaborators } from "@/features/content/hooks/colaboratorsHook";

export const Colaborators = () => {
  const { data } = useColaborators();
  return (
    <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
      <header className="flex flex-col gap-5">
        <Heading variant="display" position="centered" className="max-w-none">
          Colaboradores
        </Heading>
      </header>

      <Carousel
        opts={{ loop: false }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}>
        <CarouselContent>
          {data?.map((colaborator) => (
            <CarouselItem
              key={colaborator.id}
              className="basis-1/3 sm:basis-1/5">
              <img
                src={colaborator.imageUrl}
                alt={`Imagen del Colaborator ${colaborator.title}`}
                className="w-full max-w-[400px] max-h-[100px] object-contain select-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};
