import type { VariantProps } from "class-variance-authority";
import type { headingVariants } from "@/features/landing/components";

export interface NavbarLinksProps extends React.HTMLAttributes<HTMLUListElement> {
	isMobile?: boolean;
}

export interface LogoProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface HeadingProps extends VariantProps<typeof headingVariants>, React.HTMLAttributes<HTMLHeadingElement> {
	as?: HeadingTag;
}
