// src/features/members/components/MemberTable.tsx
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  type ColumnDef,
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  OnChangeFn,
} from "@tanstack/react-table";

import { Button, DataTable, Input } from "@/features/core/components/ui";
import type { Members } from "@/features/members/types";
import { memberColumns } from "@/features/members/components";

interface MemberTableProps {
  data: Members[];
  onFetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  onFiltersChange: (filters: Record<string, any>) => void;
}

export const MemberTable = ({
  data,
  onFetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  onFiltersChange,
}: MemberTableProps) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const memberTable = useReactTable({
    data,
    columns: memberColumns,
    pageCount: -1, // Will be handled manually
    state: {
      pagination: { pageIndex, pageSize },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
    onPaginationChange: ((updaterOrValue) => {
      if (typeof updaterOrValue === "function") {
        const newState = updaterOrValue({ pageIndex, pageSize });
        setPageIndex(newState.pageIndex);
        setPageSize(newState.pageSize);
      } else {
        setPageIndex(updaterOrValue.pageIndex);
        setPageSize(updaterOrValue.pageSize);
      }
      onFetchNextPage();
    }) as OnChangeFn<PaginationState>,
  });

  return (
    <>
      <DataTable<Members, any>
        table={memberTable}
        columns={memberColumns}
        data={data}
        searchLabel={"Buscar por N° de Socio"}
        searchProperty={"memberNumber"}
      />

      <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {pageIndex + 1}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Ir a la primera página"
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => memberTable.setPageIndex(0)}
            disabled={!memberTable.getCanPreviousPage()}>
            <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la página anterior"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => memberTable.previousPage()}
            disabled={!memberTable.getCanPreviousPage()}>
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la página siguiente"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => memberTable.nextPage()}
            disabled={!memberTable.getCanNextPage()}>
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la última página"
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() =>
              memberTable.setPageIndex(memberTable.getPageCount() - 1)
            }
            disabled={!memberTable.getCanNextPage()}>
            <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
      {isFetchingNextPage && hasNextPage && <div>Cargando más datos...</div>}
    </>
  );
};
