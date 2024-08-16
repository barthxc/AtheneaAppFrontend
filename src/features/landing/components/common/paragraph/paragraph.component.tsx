import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import type { ParagraphProps } from "@/features/landing/types";

export const paragraphVariants = cva("text-base text-[#0a1d2b] leading-relaxed", {
	variants: {
		variant: {
			destructive: "text-destructive",
		},
		size: {
			default: "text-base",
			sm: "text-sm",
		},
	},
});

export const Paragraph = ({ as: As = "p", variant, size, className, children, ...props }: ParagraphProps) => {
	return (
		<As className={cn(paragraphVariants({ variant, size, className }))} {...props}>
			{children}
		</As>
	);
};
