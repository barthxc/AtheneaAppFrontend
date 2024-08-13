import { cn } from "@/features/core/lib/utils";
import type { WrapperProps } from "@/features/landing/types";

export const Wrapper = ({ className, children, ...props }: WrapperProps) => {
	return (
		<div className={cn("w-full max-w-[1920px] mx-auto", className)} {...props}>
			{children}
		</div>
	);
};
