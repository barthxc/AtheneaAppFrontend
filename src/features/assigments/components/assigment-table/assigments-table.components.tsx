import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { assigmentColums } from "./assigment-columns.data";

import { DataTable } from "@/features/core/components/ui";
import type { AssignmentResponse } from "../../services";

interface AssigmentTableProps {
	data: AssignmentResponse[];
}

export const AssigmentTable = ({ data }: AssigmentTableProps) => {
	const assigmentTable = useReactTable({
		data,
		columns: assigmentColums,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<DataTable<AssignmentResponse, any> table={assigmentTable} columns={assigmentColums} data={data} />
		</>
	);
};
