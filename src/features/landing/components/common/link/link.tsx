import { Link as LinkBase } from "react-router-dom";

import { cn } from "@/features/core/lib/utils";
import type { LinkProps } from "@/features/landing/types";

export const Link = ({ to, className, children, ...props }: LinkProps) => {
	return (
		<LinkBase to={to} className={cn("hover:underline hover:underline-offset-4", className)} {...props}>
			{children}
		</LinkBase>
	);
};
