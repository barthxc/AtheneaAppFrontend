import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import { Icons } from "@/features/core/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/core/components/ui";

import { Heading, Paragraph, Section } from "@/features/landing/components";
import { cn } from "@/features/core/lib/utils";
import {
  About,
  Faq,
  News,
  Achievement,
  Colaborators,
  Installations,
} from "@/features/landing/components";

export const MainContent = () => {
  return (
    <main>
      <Installations />

      <About />

      <News />

      <Achievement />

      <Colaborators />

      <Faq />
    </main>
  );
};

export interface CarouselPreviousNextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  previous?: boolean;
  next?: boolean;
}

const CarouselPreviousNext = ({
  previous,
  next,
  className,
  ...restProps
}: CarouselPreviousNextProps) => {
  const props = {
    className: cn(
      "w-10 h-10 xl:w-16 xl:h-16 rounded-none border-none bg-[#FF521A] hover:bg-[#FF521A] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6",
      previous ? "xl:translate-x-4" : next ? "xl:-translate-x-4" : null,
      className
    ),
    ...restProps,
  };

  if (previous) {
    return (
      <CarouselPrevious {...props}>
        <Icons.arrowLeftCustom className="[&>path]:stroke-white" />
      </CarouselPrevious>
    );
  }

  return (
    <CarouselNext {...props}>
      <Icons.arrowRightCustom className="[&>path]:stroke-white" />
    </CarouselNext>
  );
};
