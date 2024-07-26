import type { ReactNode } from "react";

import { Spinner } from "@/features/core/components/ui";

interface LoadingViewProps {
	isLoading: boolean;
	children?: ReactNode;
	skeleton?: ReactNode;
}

export const LoadingView = ({ isLoading, children, skeleton }: LoadingViewProps) => {
	if (isLoading && skeleton) return skeleton;
	if (isLoading) return <Spinner />;

	return children;
};
