import { Heading, Paragraph, Section } from "@/features/landing/components";

export const Achievement = () => {
  return (
    <Section variant="unfilled">
      <article className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
        <div className="flex-1 flex flex-col gap-10">
          <header className="flex flex-col gap-5">
            <Heading variant="display" className="text-white max-w-2xl">
              Mejoramos Vidas
            </Heading>
            <Paragraph className="text-white">
              A lo largo de los años, Athenea ha dejado una huella significativa
              en la vida de muchas personas y comunidades. A continuación,
              destacamos algunos de los logros más importantes de nuestro
              trabajo:
            </Paragraph>
          </header>

          <ul className="[&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:text-white flex flex-col gap-5">
            <li>
              <Heading as="h3" className="text-white">
                Educación y Capacitación para Todos
              </Heading>
              <Paragraph>
                Hemos ofrecido clases de informática y talleres de manualidades
                a personas con discapacidades, proporcionándoles nuevas
                habilidades y oportunidades para su desarrollo personal y
                profesional.
              </Paragraph>
            </li>
            <li>
              <Heading as="h3" className="text-white">
                Acceso a Terapias y Rehabilitación
              </Heading>
              <Paragraph>
                A través de nuestras sesiones de maderoterapia y la atención de
                un fisioterapeuta especializado, hemos ayudado a mejorar la
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
                discapacidades, creando espacios donde todos puedan disfrutar y
                participar plenamente.
              </Paragraph>
            </li>
            <li>
              <Heading as="h3" className="text-white">
                Fortalecimiento y Apoyo Continuo
              </Heading>
              <Paragraph>
                Ofrecemos un gimnasio adaptado para fortalecer la independencia
                física y emocional de nuestros miembros, así como un entorno de
                apoyo y comprensión para enfrentar los desafíos diarios.
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
  );
};
