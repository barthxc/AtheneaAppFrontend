import { Skeleton } from "@/features/core/components/ui";
import { Spinner } from "@/features/core/components/ui";
const PdfSkeleton = () => {
  return (
    <Skeleton className="w-full h-[650px]" title="pdf-cargando">
      <Spinner />
    </Skeleton>
  );
};

export default PdfSkeleton;
