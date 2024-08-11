import { cva } from "class-variance-authority";

import { cn } from "@/features/core/lib/utils";
import { Button as ButtonBase } from "@/features/core/components/ui";

import type { ButtonProps } from "@/features/landing/types";

export const buttonVariants = cva("rounded-none text-black font-medium !no-underline", {
	variants: {
		variant: {
			default: "bg-white hover:bg-white",
			accent: "bg-[#FF521A] hover:bg-[#FF521A] text-white",
			ghost: "border border-black bg-transparent hover:bg-[#FFE353]",
		},
		size: {
			default: "py-2 px-4",
			sm: "py-2 px-4",
			md: "py-[1.35rem] px-5 text-lg",
			lg: "py-7 px-8 text-lg",
			xl: "py-8 px-8 text-xl",
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

export const Button = ({ variant, size, position, className, children, ...props }: ButtonProps) => {
	return (
		<ButtonBase className={cn(buttonVariants({ variant, size, position, className }))} {...props}>
			{children}
		</ButtonBase>
	);
};
