import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button, DataTable } from "@/features/core/components/ui";
import type { Members } from "@/features/members/types";
import { memberColumns } from "@/features/members/components";
import { useEffect } from "react";
import type { CalendarResponse } from "../../types";
import { calendarColums } from "./calendar-columns.data";

interface MemberTableProps {
  data: CalendarResponse[];
  onPageChange: (newPage: number) => void;
  currentPage: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  totalPage: number;
}

export const CalendarTable = ({
  data,
  onPageChange,
  currentPage,
  hasNextPage,
  isFetchingNextPage,
  isPreviousDisabled,
  isNextDisabled,
  totalPage,
}: MemberTableProps) => {
  const memberTable = useReactTable({
    data,
    columns: calendarColums,
    pageCount: -1, // Manejado manualmente
    state: {
      pagination: { pageIndex: currentPage - 1, pageSize: 10 },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
    onPaginationChange: () => {},
  });

  // Asegúrate de que la tabla se actualice cuando cambie la página actual
  useEffect(() => {
    memberTable.setPageIndex(currentPage - 1);
  }, [currentPage, memberTable]);

  return (
    <>
      <DataTable<CalendarResponse, any>
        table={CalendarTable}
        columns={calendarColums}
        data={data}
      />

      <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {currentPage} de {totalPage}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Ir a la primera página"
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(1)}
            disabled={isPreviousDisabled}>
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la página anterior"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isPreviousDisabled}>
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la página siguiente"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isNextDisabled}>
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Ir a la última página"
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(totalPage)}
            disabled={isNextDisabled}>
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
      {isFetchingNextPage && hasNextPage && <div>Cargando más datos...</div>}
    </>
  );
};
