// src/features/members/pages/MembersPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { cn } from "@/features/core/lib/utils";
import { LoadingView } from "@/features/core/components";
import {
  buttonVariants,
  Heading,
  Separator,
  useToast,
} from "@/features/core/components/ui";
import { MemberTable } from "@/features/members/components";
import useMembers from "@/features/members/hooks/useMembers";

export function MembersPage() {
  const [filters, setFilters] = useState({
    name: "",
    lastName: "",
    identificationNumber: "",
    memberNumber: "",
    status: "",
  });

  // Define el queryKey aquí
  const [queryKey, setQueryKey] = useState<
    (string | { [key: string]: string })[]
  >(["members", filters]);

  const {
    data,
    isError,
    isLoading,
    errorMessage,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMembers({ filters, queryKey });

  const { toast } = useToast();

  const handleFiltersChange = (newFilters: Record<string, any>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleSearch = () => {
    // Actualiza el queryKey para forzar una nueva consulta
    setQueryKey(["members", filters]);
  };

  if (isError && errorMessage) {
    toast({
      description: errorMessage,
      variant: "destructive",
    });
  }

  const flattenedData = data?.pages.flat() || [];

  return (
    <section>
      <div className="flex items-start justify-between">
        <Heading
          title={`Socios (${flattenedData.length})`}
          description="Consulta la lista de socios"
        />
        <Link
          to="/dashboard/members/new"
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 mb-4">
        {/* Inputs para filtros */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={filters.lastName}
            onChange={(e) =>
              setFilters({ ...filters, lastName: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Número de Socio"
            value={filters.memberNumber}
            onChange={(e) =>
              setFilters({ ...filters, memberNumber: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Número de Identificación"
            value={filters.identificationNumber}
            onChange={(e) =>
              setFilters({ ...filters, identificationNumber: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Estado"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="input"
          />
          <button
            type="button"
            onClick={handleSearch}
            className={cn(buttonVariants({ variant: "default" }))}>
            Buscar
          </button>
        </div>
      </div>
      <LoadingView isLoading={isLoading && !flattenedData.length}>
        <MemberTable
          data={flattenedData}
          onFetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onFiltersChange={handleFiltersChange}
        />
      </LoadingView>
    </section>
  );
}

export default MembersPage;
