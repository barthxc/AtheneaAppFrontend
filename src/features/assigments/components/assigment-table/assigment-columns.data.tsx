import type { ColumnDef } from "@tanstack/react-table";

import { reverseDate } from "@/features/core/utils";
import type { AssignmentResponse } from "../../services";
import { AssigmentTableCellAction } from "./assigment-table-cell-action.component";

export const assigmentColums: ColumnDef<AssignmentResponse>[] = [
	{
		accessorKey: "member.name",
		header: "Nombre",
	},
	{
		accessorKey: "member.lastName",
		header: "Apellido",
	},
	{
		accessorKey: "from",
		header: "Desde",
		cell: ({ row }) => reverseDate(row.getValue("from")),
	},
	{
		accessorKey: "to",
		header: "Hasta",
		cell: ({ row }) => reverseDate(row.getValue("to")),
	},
	{
		id: "actions",
		cell: ({ row }) => <AssigmentTableCellAction data={row.original} />,
	},
];
