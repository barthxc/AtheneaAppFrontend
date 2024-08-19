import { cn } from "@/features/core/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	title: string;
	description?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description, className }) => {
	return (
		<div>
			<h2 className={cn("text-3xl font-bold tracking-tight", className)}>{title}</h2>
			{description && <p className="text-sm text-muted-foreground">{description}</p>}
		</div>
	);
};
