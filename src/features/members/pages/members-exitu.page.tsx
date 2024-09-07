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

import { useMemberPaginationInfo, useMemberTableMethods, usePaginatedMembersExitu } from "@/features/members/hooks";

export function MembersExituPage() {
  const { toast } = useToast();
	const { filters, currentPage, handleFiltersChange, handlePageChange, handleSearch } =
  useMemberTableMethods();

  const {
    members,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    isError,
    isLoading,
    errorMessage,
    isFetching,
  } = usePaginatedMembersExitu({
    filters,
    currentPage,
  });

	const { isPreviousDisabled, isNextDisabled } = useMemberPaginationInfo({ members, hasPreviousPage, hasNextPage });


  useEffect(() => {
    if (isError && errorMessage) {
      toast({
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [isError, errorMessage, toast]);

  return (
    <section>
      <div className="flex items-start justify-between">
        <Heading
          title="Socios en exitus"
          description="Consulta la lista de socios dados con exitus"
        />

        <Link
          to="/dashboard/members/new"
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator className="my-4" />

			<div className="flex flex-row flex-wrap items-center gap-5 mb-5 w-full">
        <Input
          name="name"
          placeholder="Nombre"
          value={filters.name || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded max-w-44"
        />
        <Input
          name="lastName"
          placeholder="Apellido"
          value={filters.lastName || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded max-w-44"
        />
        <Input
          name="identificationNumber"
          placeholder="DNI"
          value={filters.identificationNumber || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded max-w-44"
        />
        <Input
          name="memberNumber"
          placeholder="Número de Socio"
          value={filters.memberNumber || ""}
          onChange={handleFiltersChange}
          className="border p-2 rounded max-w-44"
        />

        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      <LoadingView isLoading={isLoading && !members.length}>
        <MemberTable
          data={members}
					onPageChange={(newPage) => handlePageChange(newPage, totalPages)}
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
