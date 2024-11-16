import { useState } from "react";
import { Trash, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ConfirmModal } from "@/features/core/components/modal";
import { Button } from "@/features/core/components/ui";

import type { AssignmentResponse } from "@/features/assigments/services";
import { useDeleteAssignment } from "@/features/assigments/hooks";

export interface AssigmentTableCellActionProps {
	data: AssignmentResponse;
}

export const AssigmentTableCellAction: React.FC<AssigmentTableCellActionProps> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const { mutate: deleteAssignment, isPending } = useDeleteAssignment();

	const handleDelete = async () => {
		deleteAssignment(data.id, { onSuccess: () => setOpen(false) });
	};

	return (
		<>
			<ConfirmModal
				title="¿Estás seguro que deseas eliminar esta cesión?"
				description="Una vez eliminada no se puede recuperar."
				confirmButtonLabel="Eliminar cesión"
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={handleDelete}
				isDisabled={isPending}
				variant="destructive"
			/>

			<div className="flex flex-row gap-4">
				<Button onClick={() => navigate(`/dashboard/assignments/${data.id}/pdf`)} variant="secondary">
					<Eye className="h-4 w-4" />
				</Button>
				<Button variant="destructive" onClick={() => setOpen(true)}>
					<Trash className="h-4 w-4" />
				</Button>
			</div>
		</>
	);
};
