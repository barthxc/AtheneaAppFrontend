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
      <Heading variant="display" className="flex-1 max-w-2xl">
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
            <Paragraph>
              Athenea es una asociación de discapacitados sin ánimo de lucro
              creada ___
            </Paragraph>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Qué se hace en la asociación?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph>
              Athenea tiene un centro físico que ofrece servicios exlusivos o
              rebajados para los socios como cimnasio, aula de informática,
              manualidades o actividaeds para niños **** de X a X años
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Debo tener una discapacidad para ser socio?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph>No</Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
            ¿Cómo puedo hacer una donación a la asociación?
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph>
              Puede hacer una donación a nuestra organización benéfica haciendo
              click en el botón de "Donar ahora" en nuestro sitio web.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
