import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, HandHelping, Trash } from "lucide-react";

import { ConfirmModal } from "@/features/core/components/modal";
import { Button, useToast } from "@/features/core/components/ui";

import type { MemberTableCellActionProps } from "@/features/members/types";
import { useDeleteMember } from "@/features/members/hooks";

export const MemberTableCellAction: React.FC<MemberTableCellActionProps> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { toast } = useToast();

	const { mutate: deleteMember, isError, isPending, isSuccess, errorMessage } = useDeleteMember();

	const handleDelete = async () => {
		deleteMember(data.id);
	};

	useEffect(() => {
		if (isError && errorMessage) {
			toast({
				description: errorMessage,
				variant: "destructive",
			});
		}

		if (isSuccess) {
			toast({
				description: "Socio eliminado correctamente.",
				variant: "default",
			});
		}
		setOpen(false);
	}, [isError, errorMessage, toast, isSuccess]);

	return (
		<>
			<ConfirmModal
				title="¿Estás seguro que deseas eliminar este socio?"
				description="Una vez eliminado no se puede recuperar."
				confirmButtonLabel="Eliminar socio"
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={handleDelete}
				isDisabled={isPending}
				variant="destructive"
			/>

			<div className="flex flex-row gap-4">
				<Button variant="success" size="icon" onClick={() => navigate(`/dashboard/assignments/${data.id}/give`)}>
					<HandHelping className="h-5 w-5" />
				</Button>
				<Button size="icon" onClick={() => navigate(`/dashboard/members/${data.id}/edit`)}>
					<Edit className="h-5 w-5" />
				</Button>
				<Button variant="destructive" size="icon" onClick={() => setOpen(true)}>
					<Trash className="h-5 w-5" />
				</Button>
			</div>
		</>
	);
};
