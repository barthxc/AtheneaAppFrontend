import * as VisuallyHiddenRadix from "@radix-ui/react-visually-hidden";

export const VisuallyHidden = ({ children, ...props }: VisuallyHiddenRadix.VisuallyHiddenProps) => {
	return <VisuallyHiddenRadix.Root {...props}>{children}</VisuallyHiddenRadix.Root>;
};
