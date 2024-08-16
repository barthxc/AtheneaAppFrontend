import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui";
import Autoplay from "embla-carousel-autoplay";

import { Heading, Paragraph, Section } from "@/features/landing/components";
import { useInstallations } from "@/features/content/hooks/installationsHook";

export const Installations = () => {
  const { data } = useInstallations();
  return (
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
          {data?.map((instalation) => (
            <CarouselItem key={instalation.id}>
              <img
                src={instalation.imageUrl}
                alt={`Imagen de la Instalación ${instalation.title}`}
                className="w-full max-h-[600px] object-cover select-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* //TODO BUTTONS  */}
      </Carousel>

      <article className="flex justify-center items-start gap-10">
        <article className="max-w-sm text-center">
          <Heading as="h3" variant="display" className="mb-5">
            +400
          </Heading>
          <Paragraph>
            Nuestra asociación prospera gracias a la ayuda y esfuerzo de más de
            400 socios.
          </Paragraph>
        </article>
      </article>
    </Section>
  );
};
