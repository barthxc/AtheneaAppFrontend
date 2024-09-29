import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import type { HeadingProps } from "@/features/landing/types";

export const headingVariants = cva("text-xl xl:text-2xl text-[#0a1d2b] break-words", {
	variants: {
		variant: {
			default: "font-semibold",
			display: "text-4xl xl:text-8xl font-display max-w-4xl",
		},
		size: {
			lg: "text-3xl xl:text-4xl",
			xl: "text-4xl xl:text-5xl",
			"2xl": "text-6xl xl:text-9xl",
		},
		position: {
			centered: "text-center mx-auto",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export const Heading = ({ as: As = "h2", variant, size, position, className, ...props }: HeadingProps) => {
	return <As className={cn(headingVariants({ variant, size, position, className }))} {...props} />;
};
