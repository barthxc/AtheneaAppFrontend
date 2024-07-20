import type { UniqueIdentifier } from "@dnd-kit/core";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Input,
	useToast,
} from "@/features/core/components/ui";

import { useTaskStore } from "@/features/kanban/stores";

export function ColumnActions({
	title,
	id,
}: {
	title: string;
	id: UniqueIdentifier;
}) {
	const [open, setIsOpen] = useState(false);
	const [name, setName] = useState(title);
	const updateCol = useTaskStore((state) => state.updateCol);
	const removeCol = useTaskStore((state) => state.removeCol);
	const [editDisable, setIsEditDisable] = useState(true);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { toast } = useToast();

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setIsEditDisable(!editDisable);
					updateCol(id, name);
					toast({
						title: "Name Updated",
						variant: "default",
						description: `${title} updated to ${name}`,
					});
				}}>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="!mt-0 mr-auto text-base disabled:cursor-pointer disabled:border-none disabled:opacity-100"
					disabled={editDisable}
					ref={inputRef}
				/>
			</form>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="secondary" className="ml-1">
						<span className="sr-only">Actions</span>
						<DotsHorizontalIcon className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						onSelect={() => {
							setIsEditDisable(!editDisable);
							setTimeout(() => {
								inputRef.current?.focus();
							}, 500);
						}}>
						Rename
					</DropdownMenuItem>
					<DropdownMenuSeparator />

					<DropdownMenuItem onSelect={() => setShowDeleteDialog(true)} className="text-red-600">
						Delete Section
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure want to delete column?</AlertDialogTitle>
						<AlertDialogDescription>
							NOTE: All tasks related to this category will also be deleted.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<Button
							variant="destructive"
							onClick={() => {
								// yes, you have to set a timeout
								setTimeout(() => {
									document.body.style.pointerEvents = "";
								}, 100);

								setShowDeleteDialog(false);
								removeCol(id);
								toast({
									description: "This column has been deleted.",
								});
							}}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
