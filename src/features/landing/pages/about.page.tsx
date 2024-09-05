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
              Fundación y Comienzos
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              Desde su creación en 2006, Athenea Cuenca Minera ha sido un pilar
              fundamental en la lucha por la inclusión y el bienestar de las
              personas con discapacidad en nuestra comunidad. Inicialmente, la
              asociación comenzó sus operaciones en una pequeña oficina
              compartida, con recursos limitados pero con un compromiso
              inquebrantable hacia nuestra misión. Desde el primer día, nuestra
              visión ha sido clara: promover la igualdad de oportunidades,
              garantizar los derechos y mejorar la calidad de vida de las
              personas con discapacidad.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/about-2.webp"
                  alt="Imagen de antigua presidenta"
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/about-1.webp"
                  alt="Imagen de Socio encargado de la gestión de la asociación"
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/about-3.webp"
                  alt="Imagen de Formación sobre el uso del Cuero"
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
            </Carousel.Content>
          </Carousel>
        </article>
        <article className="flex items-center justify-center flex-col gap-20 xl:flex-row-reverse">
          <div className="flex-1">
            <Paragraph className="text-xl xl:text-3xl">
              Crecimiento y Expansión
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              A lo largo de los años, Athenea Cuenca Minera ha experimentado un
              notable crecimiento. Gracias al esfuerzo colectivo de nuestros
              miembros, voluntarios y colaboradores, hemos podido expandir
              nuestros servicios y recursos. Este crecimiento nos permitió
              trasladarnos a unas instalaciones más amplias, que fueron
              completamente reacondicionadas y mejoradas por nuestra asociación
              para ofrecer un entorno adaptado y moderno. Esto nos ha permitido
              ofrecer una gama completa de programas y servicios que abordan las
              diversas necesidades de las personas con discapacidad, reflejando
              nuestro compromiso continuo con la comunidad. Así, llegamos a un
              mayor número de personas y brindamos un apoyo más especializado.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/about-4.webp"
                  alt="Imagen de Aula de Informática"
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/about-5.webp"
                  alt="Imagen de Aula de Fisoterapeuta Acondicionada"
                  className="w-full  object-cover select-none"
                />
              </Carousel.Item>
            </Carousel.Content>
          </Carousel>
        </article>
        <article className="flex items-center justify-center flex-col gap-20 xl:flex-row">
          <div className="flex-1">
            <Paragraph className="text-xl xl:text-3xl">
              Impacto y Progreso Actual
            </Paragraph>
            <Paragraph className="text-base xl:text-xl">
              Hoy en día, Athenea Cuenca Minera es reconocida como una de las
              principales organizaciones sin ánimo de lucro en la región,
              dedicada al apoyo integral de las personas con discapacidad.
              Nuestro impacto se refleja en las vidas que hemos tocado y en las
              historias de éxito de aquellos a quienes hemos asistido. Aunque
              contamos con profesionales capacitados, es fundamental destacar
              que el corazón de nuestra asociación son nuestros socios, quienes
              de manera completamente altruista hacen posible nuestro
              funcionamiento diario. Con un enfoque en la inclusión, la
              participación social y el acceso a servicios esenciales, seguimos
              siendo un faro de esperanza y un motor de cambio positivo en
              nuestra comunidad.
            </Paragraph>
          </div>
          <Carousel className="flex-[2]">
            <Carousel.Content>
              <Carousel.Item>
                <img
                  src="/about-6.webp"
                  alt="Imagen de Tarde de Convivencia con los socios de Athenea Cuenca Minera"
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
