import type { ColumnDef } from "@tanstack/react-table";

import { reverseDate } from "@/features/core/utils";
import { CalendarTableCellAction } from "@/features/calendar/components";
import type { CalendarResponse } from "@/features/calendar/types";

export const calendarColums: ColumnDef<CalendarResponse>[] = [
	{
		accessorKey: "title",
		header: "Título",
	},
	{
		accessorKey: "from",
		header: "from",
		cell: ({ row }) => reverseDate(row.getValue("from")),
	},
	{
		accessorKey: "to",
		header: "to",
		cell: ({ row }) => reverseDate(row.getValue("to")),
	},
	{
		id: "actions",
		cell: ({ row }) => <CalendarTableCellAction data={row.original} />,
	},
];
