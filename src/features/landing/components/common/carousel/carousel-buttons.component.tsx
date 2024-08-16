import { cn } from "@/features/core/lib/utils";
import { Icons } from "@/features/core/components";
import { CarouselNext, CarouselPrevious } from "@/features/core/components/ui";

import type { CarouselButtonsProps } from "@/features/landing/types";

export const CarouselButtons = ({
  previous,
  next,
  className,
  ...restProps
}: CarouselButtonsProps) => {
  const props = {
    className: cn(
      "w-10 h-10 xl:w-16 xl:h-16 rounded-none border-none bg-[#2974ba] hover:bg-[#2c7ec9] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6",
      previous ? "translate-x-5" : next ? "-translate-x-5" : null,
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
