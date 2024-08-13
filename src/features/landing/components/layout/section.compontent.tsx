import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children?: ReactNode;
}

export const sectionVariants = cva("p-16", {
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
