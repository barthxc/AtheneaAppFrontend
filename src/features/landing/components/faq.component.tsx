import { Heading, Paragraph, Section } from "@/features/landing/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/core/components/ui";

export const Faq = () => {
  return (
    <Section
      variant="filled"
      className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-10 xl:gap-20">
      <Heading variant="display" className="flex-1" position="centered">
        Preguntas frecuentes
      </Heading>
      <Accordion
        type="multiple"
        className="flex-1 [&_svg]:text-black [&_svg]:w-7 [&_svg]:h-7">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Qué es Athenea?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="text-base xl:text-xl">
              Athenea es una Asociación de Discapacitados sin ánimo de lucro
              fundada en 2006 que se dedica a realizar una importante labor
              social enfocada en la visibilización, valoración y promoción de la
              inclusión de personas con discapacidad. A lo largo de los años,
              Athenea ha trabajado incansablemente para derribar barreras,
              sensibilizar a la sociedad y crear oportunidades para que las
              personas con discapacidad puedan integrarse plenamente en todos
              los ámbitos de la vida. Su compromiso se refleja en diversas
              iniciativas que buscan fomentar la igualdad de derechos, el acceso
              a recursos y la participación activa de sus miembros en la
              comunidad.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Qué se hace en la asociación?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="text-base xl:text-xl">
              Athenea cuenta con un centro físico que ofrece servicios
              exclusivos o con tarifas reducidas para sus socios, como un
              gimnasio, un aula de informática, talleres de manualidades, y
              actividades especialmente diseñadas para niños muy pequeños, de
              entre 1 y 5 años, que presentan alguna discapacidad o cualquier
              tipo de necesidad especial. El centro está pensado para brindar un
              espacio seguro y enriquecedor donde estos pequeños puedan
              desarrollar sus habilidades, interactuar con otros niños, y
              recibir la atención personalizada que requieren para su bienestar
              y crecimiento.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Es necesario tener una discapacidad para poder ser socio?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="text-base xl:text-xl">
              No, no es necesario tener una discapacidad para ser socio. La
              Asociación Athenea está abierta a todas las personas que deseen
              apoyar nuestra misión y participar en nuestras actividades, ya sea
              que tengan una discapacidad o no. Valoramos la diversidad y
              creemos que todos pueden contribuir a la inclusión y el bienestar
              de la comunidad.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Cómo puedo hacer una donación a la asociación?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="text-base xl:text-xl">
              Puede hacer una donación a nuestra organización benéfica haciendo
              click en el botón de "Donar ahora" en nuestro sitio web.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
