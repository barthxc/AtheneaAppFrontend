import * as React from "react";

import { cn } from "@/features/core/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	props.value = props.value ?? "";
	return (
		<textarea
			className={cn(
				"flex min-h-[80px] w-full rounded-lg bg-muted/50 border border-input px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-input-darken disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
