import { Spinner, Separator } from "@/features/core/components/ui";
import { useGetPayments } from "@/features/donation/hooks/hook";
import { dateFormatter } from "@/features/core/utils";

export const RecentSales = () => {
  const { data, isLoading } = useGetPayments();
  console.log(data);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="space-y-8">
      <div className="max-h-96 overflow-y-auto space-y-2">
        {data?.map((donation) => (
          <>
            <div key={donation.id} className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {donation.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {dateFormatter(new Date(donation.createdAt))}
                </p>
              </div>
              <div className="ml-auto pr-4 font-medium">
                {donation.amount} €
              </div>
            </div>
            <Separator key={donation.id} className="bg-gray-400" />
          </>
        ))}
      </div>
    </div>
  );
};
