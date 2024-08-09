import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import type { HeadingProps } from "@/features/landing/types";

export const headingVariants = cva("text-2xl", {
	variants: {
		variant: {
			default: "font-semibold",
			display: "text-8xl font-display max-w-4xl",
		},
		size: {
			default: "",
			lg: "text-4xl",
			"2xl": "text-9xl",
		},
		position: {
			default: "",
			centered: "text-center mx-auto",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		position: "default",
	},
});

export const Heading = ({ as: As = "h2", variant, size, position, className, ...props }: HeadingProps) => {
	return <As className={cn(headingVariants({ variant, size, position, className }))} {...props} />;
};
