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
} from "@tanstack/react-table";

import { Button, DataTable, Input } from "@/features/core/components/ui";

import type { Members } from "@/features/members/types";
import { memberColumns } from "@/features/members/components";

interface MemberTableProps {
  columns: ColumnDef<Members, any>[];
  data: Members[];
  searchLabel: string;
  searchProperty: keyof Members;
  loading?: boolean;
  pageNo: number;
  totalMembers: number;
  pageCount: number;
  pageSizeOptions?: number[];
}

export const MemberTable = ({
  columns,
  data,
  searchLabel,
  searchProperty,
  loading,
  pageNo,
  totalMembers,
  pageCount,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: MemberTableProps) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const memberTable = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      pagination: { pageIndex, pageSize },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
    onPaginationChange: (newPagination: PaginationState) => {
      setPageIndex(newPagination.pageIndex);
      setPageSize(newPagination.pageSize);
    },
  });

  const searchValue = memberTable
    .getColumn(searchProperty)
    ?.getFilterValue() as string;

  useEffect(() => {
    // Handle searchValue changes here
    // Example: update URL or perform other actions
  }, [searchValue]);

  return (
    <>
      <div className="flex flex-row gap-5 items-center">
        <Input placeholder={"Nº Socio"} className="w-full md:max-w-sm mb-4" />
        <Input placeholder={"Nombre"} className="w-full md:max-w-sm mb-4" />
        <Input placeholder={"DNI"} className="w-full md:max-w-sm mb-4" />
        <Button>Buscar</Button>
      </div>
      <DataTable<Members, any>
        table={memberTable}
        columns={memberColumns}
        data={data}
        searchLabel={searchLabel}
        searchProperty={searchProperty}
        loading={loading}
      />

      <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {pageIndex + 1} de {memberTable.getPageCount()}
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
        </div>
      </div>
    </>
  );
};
