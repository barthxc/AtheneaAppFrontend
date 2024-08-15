import { Heading, Paragraph } from "@/features/landing/components";

export const Card = () => {
  return (
    <article className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
      <div className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
        <img src="/hero.jpg" alt="" className="w-full max-h-80 object-cover" />
        <Heading as="h3">Título de la Noticia</Heading>
        <Paragraph>Descripción de la noticia cortada por puntos....</Paragraph>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center font-medium text-lg">
            <Paragraph as="span">$8,520</Paragraph>
            <Paragraph as="span">50%</Paragraph>
          </div>
          <Paragraph as="span" size="sm" className="uppercase">
            Raised of $17,000
          </Paragraph>
        </div>
      </div>
    </article>
  );
};
