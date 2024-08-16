import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/features/core/lib/utils";
import {
  Carousel as CarouselBase,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui";

import {
  CarouselButtons,
  type CarouselProps,
} from "@/features/landing/components";

export const Carousel = ({
  autoplay = true,
  includeButtons = true,
  className,
  children,
  ...props
}: CarouselProps) => {
  return (
    <CarouselBase
      opts={{ loop: false }}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 3000,
              }),
            ]
          : undefined
      }
      className={cn(className)}
      {...props}>
      {children}
      {includeButtons && (
        <>
          <CarouselButtons previous />
          <CarouselButtons next />
        </>
      )}
    </CarouselBase>
  );
};

Carousel.Content = CarouselContent;
Carousel.Item = CarouselItem;
