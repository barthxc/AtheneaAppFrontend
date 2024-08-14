import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import type { SectionProps } from "@/features/landing/types";

export const sectionVariants = cva("p-14", {
  variants: {
    variant: {
      unfilled: "bg-transparent",
      filled: "bg-[#FFFDF1]",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export const Section = ({
  variant,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      {children}
    </section>
  );
};
