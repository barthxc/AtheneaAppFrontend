"use client";
import { type ColumnDef, flexRender, type Table as TableType } from "@tanstack/react-table";

import {
	Button,
	ScrollArea,
	ScrollBar,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/features/core/components/ui";

interface DataTableProps<TData, TValue> {
	table: TableType<TData>;
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchLabel?: string;
	searchProperty?: keyof TData;
	includePagination?: boolean;
}

/**
 * @param table The data table options to use.
 * @param columns The column definitions. For more information see: https://ui.shadcn.com/docs/components/data-table
 * @param searchLabel The text to use for the search input.
 * @param searchProperty The column key to search for.
 * @param includePagination Whether the table includes a internal pagination or not.
 * @example <DataTable table={userTableOptions} columns={userColumns} searchProperty="username" includePagination={true} />
 * @returns A data table component with a search bar (if searchProperty is specified).
 */
export function DataTable<TData, TValue>({ table, columns, includePagination }: DataTableProps<TData, TValue>) {
	return (
		<>
			<ScrollArea className="rounded-md border">
				<Table className="relative">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No se encontraron resultados.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<div className="flex items-center justify-end space-x-2 py-4">
				{includePagination && (
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}>
							Anterior
						</Button>
						<Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
							Siguiente
						</Button>
					</div>
				)}
			</div>
		</>
	);
}
