import { Spinner } from "@/features/core/components/ui";
import type { LoadingViewProps } from "@/features/core/components";

export const LoadingView = ({ isLoading, children, skeleton }: LoadingViewProps) => {
	if (isLoading && skeleton) return skeleton;
	if (isLoading) return <Spinner />;

	return children;
};
