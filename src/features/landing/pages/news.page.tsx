import {
  Section,
  Heading,
  Paragraph,
  Carousel,
} from "@/features/landing/components";
import { useGetContents } from "@/features/content/hooks";
import { Skeleton } from "@/features/core/components/ui";

export function NewsPage() {
  const { data, isLoading } = useGetContents();
  return (
    <Section className="!pt-[8.5rem]">
      <Heading variant="display" position="centered" className="pb-20">
        Noticias y Eventos
      </Heading>

      {isLoading && (
        <div className="flex flex-col items-center gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={Symbol(`skeleton_key_${index}`).description}
              className="flex flex-col items-center gap-5 w-full max-w-4xl">
              <Skeleton className="w-3/4 h-8 mb-4" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-full h-60" />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col justify-center items-center gap-20">
        {data?.map((item, index) => (
          <article
            key={item.id}
            className={`flex items-start justify-center flex-col gap-10 ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            }`}>
            <div className="flex-1">
              <Paragraph className="text-xl xl:text-3xl">
                {item.title} {new Date(item.date).toLocaleDateString()}
              </Paragraph>
              <Paragraph className="text-base xl:text-xl">
                {item.description}
              </Paragraph>
            </div>
            <Carousel className="flex-[2]">
              <Carousel.Content>
                {item.images.map((image) => (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.url}
                      alt={`Imágenes de la noticia ${item.title}`}
                      className="w-full aspect-video	object-scale-down	select-none"
                    />
                  </Carousel.Item>
                ))}
              </Carousel.Content>
            </Carousel>
          </article>
        ))}
      </div>
    </Section>
  );
}
