import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import type { ParagraphProps } from "@/features/landing/types";

export const paragraphVariants = cva("text-base leading-relaxed", {
	variants: {
		size: {
			default: "text-base",
			sm: "text-sm",
		},
	},
});

export const Paragraph = ({ as: As = "p", size, className, children, ...props }: ParagraphProps) => {
	return (
		<As className={cn(paragraphVariants({ size, className }))} {...props}>
			{children}
		</As>
	);
};
