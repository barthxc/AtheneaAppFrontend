import { useEffect, useState } from "react";

import { Button, Modal } from "@/features/core/components/ui";
import type { AlertModalProps } from "@/features/core/components";

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
