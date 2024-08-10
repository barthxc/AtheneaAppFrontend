import { cn } from "@/features/core/lib/utils";
import type { ParagraphProps } from "@/features/landing/types";
import { cva } from "class-variance-authority";

export const paragraphVariants = cva("leading-relaxed", {
	variants: {
		size: {
			default: "text-base",
			sm: "text-sm",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export const Paragraph = ({ as: As = "p", size, className, children, ...props }: ParagraphProps) => {
	return (
		<As className={cn(paragraphVariants({ size, className }))} {...props}>
			{children}
		</As>
	);
};
