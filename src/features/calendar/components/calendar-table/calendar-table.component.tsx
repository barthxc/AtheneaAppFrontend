import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { DataTable } from "@/features/core/components/ui";
import type { CalendarResponse } from "@/features/calendar/types";
import { calendarColums } from "@/features/calendar/components";

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
			<DataTable<CalendarResponse, any> table={calendarTable} columns={calendarColums} data={data} />
		</>
	);
};
