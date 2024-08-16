import {
  Section,
  Heading,
  Paragraph,
  Carousel,
} from "@/features/landing/components";

export function AboutPage() {
  return (
    <Section className="bg-green-500 mt-20">
      <Heading variant="display">Sobre Nosotros</Heading>
      <article className="flex flex-row">
        <Paragraph>Hola</Paragraph>
      </article>
    </Section>
  );
}
