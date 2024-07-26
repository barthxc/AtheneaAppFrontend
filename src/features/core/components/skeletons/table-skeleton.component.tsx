import { Skeleton, Spinner } from "@/features/core/components/ui";

export const TableSkeleton = () => {
	return (
		<>
			<Skeleton className="h-[calc(90vh-220px)] rounded-md border">
				<Spinner />
			</Skeleton>
		</>
	);
};
