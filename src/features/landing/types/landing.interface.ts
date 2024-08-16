import type { VariantProps } from "class-variance-authority";
import type { LinkProps as LinkPropsBase } from "react-router-dom";
import type { ProgressProps as ProgressPropsBase } from "@radix-ui/react-progress";

import type {
	buttonVariants,
	headingVariants,
	paragraphVariants,
	sectionVariants,
} from "@/features/landing/components";

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface NavbarLinksProps extends React.HTMLAttributes<HTMLUListElement> {
	isMobile?: boolean;
	isHome?: boolean;
}

export interface LogoProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface HeadingProps extends VariantProps<typeof headingVariants>, React.HTMLAttributes<HTMLHeadingElement> {
	as?: HeadingTag;
}

export type ParagraphTag = "p" | "span";
export interface ParagraphProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraphVariants> {
	as?: ParagraphTag;
}

export interface LinkProps extends LinkPropsBase {}
export interface ProgressProps extends ProgressPropsBase {}
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
	children?: React.ReactNode;
}

export interface CarouselButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	previous?: boolean;
	next?: boolean;
}
