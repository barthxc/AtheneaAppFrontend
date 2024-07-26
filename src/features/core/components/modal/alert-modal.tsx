import { useEffect, useState } from "react";
import { Button } from "@/features/core/components/ui/button";
import { Modal } from "@/features/core/components/ui/modal";

interface AlertModalProps {
	title?: string;
	description?: string;
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
	title = "¿Estás seguro?",
	description = "Esta acción no se puede revertir",
	isOpen,
	onClose,
	onConfirm,
	loading,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Modal title={title} description={description} isOpen={isOpen} onClose={onClose}>
			<div className="flex w-full items-center justify-end space-x-2 pt-6">
				<Button disabled={loading} variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button disabled={loading} variant="destructive" onClick={onConfirm}>
					Continue
				</Button>
			</div>
		</Modal>
	);
};
