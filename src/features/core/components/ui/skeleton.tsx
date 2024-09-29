import { cn } from "@/features/core/lib/utils";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn("animate-pulse rounded-lg bg-primary/10", className)} {...props} />;
};
