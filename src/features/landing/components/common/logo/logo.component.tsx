import { cn } from "@/features/core/lib/utils";

import { Heading } from "@/features/landing/components";
import type { LogoProps } from "@/features/landing/types";

export const Logo = ({ className, ...props }: LogoProps) => {
	return (
		<Heading className={cn("text-white", className)} {...props}>
			Athenea
		</Heading>
	);
};
