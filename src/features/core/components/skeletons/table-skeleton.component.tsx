import { Skeleton } from "@/features/core/components/ui";
import { Spinner } from "@/features/core/components/ui";
const TableSkeleton = () => {
  return (
    <>
      <Skeleton className="h-[calc(90vh-220px)] rounded-md border">
        <Spinner />
      </Skeleton>
    </>
  );
};

export default TableSkeleton;
