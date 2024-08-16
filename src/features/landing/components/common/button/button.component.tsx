import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import { Button as ButtonBase } from "@/features/core/components/ui";

import type { ButtonProps } from "@/features/landing/types";

export const buttonVariants = cva("rounded-none h-auto text-black font-medium !no-underline", {
	variants: {
		variant: {
			default: "bg-white hover:bg-white",
			accent: "bg-[#2974ba] hover:bg-[#2c7ec9] text-white",
			ghost: "border border-black bg-transparent hover:bg-[#2974ba]",
		},
		size: {
			default: "py-2 px-4",
			sm: "py-2 px-4",
			md: "py-3 px-5 text-lg",
			lg: "py-4 px-8 text-lg",
			xl: "py-5 px-8 text-xl",
		},
		position: {
			centered: "text-center mx-auto",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export const Button = ({ variant, size, position, className, children, ...props }: ButtonProps) => {
	return (
		<ButtonBase className={cn(buttonVariants({ variant, size, position, className }))} {...props}>
			{children}
		</ButtonBase>
	);
};
