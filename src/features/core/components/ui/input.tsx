import * as React from "react";

import { cn } from "@/features/core/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	if (props.value instanceof File) {
		props.value = "";
	} else {
		props.value = props.value ?? "";
	}

	return (
		<input
			type={type}
			className={cn(
				"flex h-12 w-full rounded-lg border bg-input px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-input-darken disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
