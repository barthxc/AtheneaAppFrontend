import { useColaborators } from "@/features/content/hooks";
import { Carousel, Heading, Section } from "@/features/landing/components";

export const Colaborators = () => {
  const { data } = useColaborators();

  return (
    <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
      <header className="flex flex-col gap-5">
        <Heading variant="display" position="centered" className="max-w-none">
          Colaboradores
        </Heading>
      </header>

      <Carousel includeButtons={false}>
        <Carousel.Content>
          {data?.map((colaborator) => (
            <Carousel.Item
              key={colaborator.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex justify-center items-center">
              <img
                src={colaborator.imageUrl}
                alt={`Imagen del Colaborator ${colaborator.title}`}
                className="w-full max-w-[400px] max-h-[100px] object-contain select-none"
              />
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    </Section>
  );
};
