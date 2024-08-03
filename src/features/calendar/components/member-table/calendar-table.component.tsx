import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/features/core/components/ui";
import type { CalendarResponse } from "../../types";
import { calendarColums } from "./calendar-columns.data";

interface CalendarTableProps {
  data: CalendarResponse[];
}

export const CalendarTable = ({ data }: CalendarTableProps) => {
  const calendarTable = useReactTable({
    data,
    columns: calendarColums,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTable<CalendarResponse, any>
        table={calendarTable}
        columns={calendarColums}
        data={data}
      />

      {/* {isFetchingNextPage && hasNextPage && <div>Cargando más datos...</div>} */}
    </>
  );
};
