import { cn } from "@/features/core/lib/utils";
import { Textarea as TextareaBase } from "@/features/core/components/ui";

import type { TextareaProps } from "@/features/landing/components";

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return <TextareaBase className={cn("rounded-none bg-gray-200 text-base text-black", className)} {...props} />;
};
