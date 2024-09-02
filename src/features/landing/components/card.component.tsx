import type { ContentResponse } from "@/features/content/types";
import { dateFormatter } from "@/features/core/utils";
import { Heading, Paragraph } from "@/features/landing/components";

export const Card = ({ date, description, images, title }: ContentResponse) => {
  return (
    <article className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
      <div className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
        <img
          src={images[0].url}
          alt=""
          className="w-full max-h-80 object-cover"
        />
        <Heading as="h3">{title}</Heading>
        <Paragraph className="line-clamp-3">{description}</Paragraph>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center font-medium text-lg">
            <Paragraph as="span">{dateFormatter(new Date(date))}</Paragraph>
          </div>
        </div>
      </div>
    </article>
  );
};
