import { cn } from "@/features/core/lib/utils";
import { Input as InputBase } from "@/features/core/components/ui";

import type { InputProps } from "@/features/landing/components";

export const Input = ({ className, ...props }: InputProps) => {
	return <InputBase className={cn("rounded-none bg-gray-200 text-base text-black", className)} {...props} />;
};
