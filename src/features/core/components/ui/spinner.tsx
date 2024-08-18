import type React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/features/core/lib/utils";

export const spinnerVariants = cva("flex-col items-center justify-center", {
	variants: {
		show: {
			true: "flex",
			false: "hidden",
		},
	},
	defaultVariants: {
		show: true,
	},
});

export const loaderVariants = cva("animate-spin text-primary", {
	variants: {
		size: {
			small: "size-6",
			medium: "size-8",
			large: "size-12",
		},
	},
	defaultVariants: {
		size: "large",
	},
});

export interface SpinnerContentProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
	className?: string;
	children?: React.ReactNode;
}

export const Spinner = ({ size, show, children, className }: SpinnerContentProps) => {
	return (
		<div className="h-full grid place-content-center">
			<span className={spinnerVariants({ show })}>
				<Loader2 className={cn(loaderVariants({ size }), className)} />
				{children}
			</span>
		</div>
	);
};
