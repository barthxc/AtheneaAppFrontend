import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { assigmentColums } from "./assigment-columns.data";

import { DataTable } from "@/features/core/components/ui";
import type { AssigmentResponse } from "../../services";

interface AssigmentTableProps {
  data: AssigmentResponse[];
}

export const AssigmentTable = ({ data }: AssigmentTableProps) => {
  const assigmentTable = useReactTable({
    data,
    columns: assigmentColums,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTable<AssigmentResponse, any>
        table={assigmentTable}
        columns={assigmentColums}
        data={data}
      />
    </>
  );
};
