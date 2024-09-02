import {
  Section,
  Heading,
  Paragraph,
  Carousel,
} from "@/features/landing/components";

export function AboutPage() {
  return (
    <Section className="!pt-[8.5rem]">
      <Heading variant="display" position="centered" className="pb-20">
        Sobre Nosotros
      </Heading>
      <div className="flex flex-col justify-center items-center gap-10">
        <article className="flex items-center justify-center flex-col gap-20 xl:flex-row">
          <div className="flex-1">
            <Paragraph className="text-xl xl:text-3xl">
              Título 15/03/2005
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              La Asociación de Apoyo a Personas con Discapacidad (AAPD) se fundó
              en 2005 con el objetivo de promover la inclusión y mejorar la
              calidad de vida de las personas con discapacidad en nuestra
              comunidad. Desde sus inicios, hemos trabajado incansablemente para
              ofrecer servicios y programas que aborden las necesidades y los
              desafíos que enfrentan las personas con discapacidad.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
            </Carousel.Content>
          </Carousel>
        </article>
        <article className="flex items-center justify-center flex-col gap-20 xl:flex-row-reverse">
          <div className="flex-1">
            <Paragraph className="text-xl xl:text-3xl">
              Título 23/02/1995
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              Con el paso de los años, la AAPD ha experimentado un crecimiento
              significativo, ampliando nuestros servicios y fortaleciendo
              nuestras alianzas con otras organizaciones y entidades
              gubernamentales. Hemos trabajado arduamente para aumentar la
              conciencia pública sobre los problemas que enfrentan las personas
              con discapacidad y abogar por políticas y prácticas que promuevan
              la igualdad de oportunidades para todos.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
            </Carousel.Content>
          </Carousel>
        </article>
        <article className="flex items-center justify-center flex-col gap-20 xl:flex-row">
          <div className="flex-1">
            <Paragraph className="text-xl xl:text-3xl">
              Título 23/02/1995
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              A lo largo de los años, la AAPD ha tenido un impacto profundo en
              la comunidad, brindando apoyo integral a miles de personas con
              discapacidad y sus familias. Hemos creado programas innovadores
              que fomentan la autonomía, la participación social y el acceso
              equitativo a la educación, el empleo y los servicios de salud.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/test.jpg"
                  alt=""
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
            </Carousel.Content>
          </Carousel>
        </article>
      </div>
    </Section>
  );
}
