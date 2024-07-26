import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { ConfirmModal } from "@/features/core/components/modal";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	useToast,
} from "@/features/core/components/ui";

import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import type { MemberTableCellActionProps } from "@/features/members/types";
import { useMemberStore } from "@/features/members/stores";

export const MemberTableCellAction: React.FC<MemberTableCellActionProps> = ({ data }) => {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const deleteMemberById = useMemberStore((s) => s.deleteMemberById);
	const { toast } = useToast();

	const handleDelete = async () => {
		setLoading(true);
		try {
			const deletedMember = await deleteMemberById(data.id);
			console.log({ deletedMemberResponse: deletedMember });
			if (deletedMember || deletedMember === "") {
				toast({
					description: "Socio eliminado correctamente.",
				});
			} else {
				toast({
					description: ErrorService.handleError(0, ERROR_MESSAGES.MEMBER.REMOVE),
					variant: "destructive",
				});
			}
		} catch (err: any) {
			const errorMessage = ErrorService.handleError(err.statusCode, ERROR_MESSAGES.MEMBER.REMOVE);
			toast({
				description: errorMessage,
				variant: "destructive",
			});
		} finally {
			setLoading(false);
			setOpen(false);
		}
	};

	return (
		<>
			<ConfirmModal
				title="¿Estás seguro que deseas eliminar este socio?"
				description="Una vez eliminado no se puede recuperar."
				confirmButtonLabel="Eliminar socio"
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={handleDelete}
				isDisabled={loading}
				variant="destructive"
			/>

			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Abrir menú de acciones</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Acciones</DropdownMenuLabel>

					<DropdownMenuItem onClick={() => navigate(`/dashboard/members/${data.id}/edit`)}>
						<Edit className="mr-2 h-4 w-4" /> Editar
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setOpen(true)}>
						<Trash className="mr-2 h-4 w-4" /> Eliminar
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};
