import { Skeleton, Spinner } from "@/features/core/components/ui";

export const PdfSkeleton = () => {
	return (
		<Skeleton className="w-full h-[650px]" title="pdf-cargando">
			<Spinner />
		</Skeleton>
	);
};
