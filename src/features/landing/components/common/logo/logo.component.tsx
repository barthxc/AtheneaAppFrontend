import { cn } from "@/features/core/lib/utils";

import { Heading, Link } from "@/features/landing/components";
import type { LogoProps } from "@/features/landing/types";

export const Logo = ({ className, ...props }: LogoProps) => {
	return (
		<Heading className={cn(className)} {...props}>
			<Link to="/" className="hover:no-underline">
				Athenea
			</Link>
		</Heading>
	);
};
