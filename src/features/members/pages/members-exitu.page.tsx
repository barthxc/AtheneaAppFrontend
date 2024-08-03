import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn } from "@/features/core/lib/utils";
import { LoadingView } from "@/features/core/components";
import {
  Button,
  buttonVariants,
  Heading,
  Input,
  Separator,
  useToast,
} from "@/features/core/components/ui";
import { MemberTable } from "@/features/members/components";

import { usePaginatedMembersExitu } from "@/features/members/hooks";

export function MembersExituPage() {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState<Record<string, string>>(
    {}
  );
  const [searchTrigger, setSearchTrigger] = useState(false);

  const {
    members,
    totalPages,
    currentPage: page,
    hasNextPage,
    hasPreviousPage,
    isError,
    isLoading,
    errorMessage,
    isFetching,
  } = usePaginatedMembersExitu({
    filters: searchFilters,
    currentPage,
  });

  const { toast } = useToast();

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    setSearchFilters(filters);
    setCurrentPage(1);
    setSearchTrigger(true);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;

    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (searchTrigger) {
      setSearchTrigger(false);
    }
  }, [searchTrigger]);

  useEffect(() => {
    if (isError && errorMessage) {
      toast({
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [isError, errorMessage, toast]);

  const isEmptyData = members.length === 0;

  const isPreviousDisabled = !hasPreviousPage || isEmptyData;
  const isNextDisabled = !hasNextPage || isEmptyData;

  return (
    <section>
      <div className="flex items-start justify-between">
        <Heading
          title={"Socios sin pagar"}
          description="Consulta la lista de socios sin pagar"
        />

        <Link
          to="/dashboard/members/new"
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator className="my-4" />

      <div className="flex flex-row gap-5 items-center mb-5">
        <Input
          name="name"
          placeholder="Nombre"
          value={filters.name || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded w-44"
        />
        <Input
          name="lastName"
          placeholder="Apellido"
          value={filters.lastName || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded w-44"
        />
        <Input
          name="identificationNumber"
          placeholder="DNI"
          value={filters.identificationNumber || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded w-44"
        />
        <Input
          name="memberNumber"
          placeholder="Número de Socio"
          value={filters.memberNumber || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded w-44"
        />
        {/* //TODO shadCN component, using a empty option */}

        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      <LoadingView isLoading={isLoading && !members.length}>
        <MemberTable
          data={members}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetching}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
          totalPage={totalPages}
        />
      </LoadingView>
    </section>
  );
}

export default MembersExituPage;
