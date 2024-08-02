import type { ColumnDef } from "@tanstack/react-table";

import { capitalizeString } from "@/features/core/utils";
import { reverseDate } from "@/features/core/utils/reverseDate";

import 
import { MemberTableCellAction } from "@/features/members/components";
import type { CalendarResponse } from "../../types";

export const calendarColums: ColumnDef<CalendarResponse>[] = [
  {
    id: "select",
    header: "",
    accessorFn: (row) => row.id,
  },
  {
    accessorKey: "memberNumber",
    header: "N° Socio",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => capitalizeString(row.getValue("name")),
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
    cell: ({ row }) => capitalizeString(row.getValue("lastName")),
  },
  {
    id: "actions",
    cell: ({ row }) => <MemberTableCellAction data={row.original} />,
  },
];
