import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/features/core/lib/utils";
import type { ProgressProps } from "@/features/landing/types";

export const Progress = ({ value, className, ...props }: ProgressProps) => (
	<ProgressPrimitive.Root
		className={cn("relative w-full h-3 overflow-hidden rounded-full bg-[#E6EDEB]", className)}
		{...props}>
		<ProgressPrimitive.Indicator
			className="w-full h-full flex-1 rounded-full bg-[#10A476] transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
);
