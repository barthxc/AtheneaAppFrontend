import { Button, Modal } from "@/features/core/components/ui";

interface ConfirmModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
	cancelButtonLabel?: string;
	confirmButtonLabel?: string;
	isOpen: boolean;
	onClose(): void;
	onConfirm(): void;
	isDisabled?: boolean;
	variant?: "destructive" | "default";
}

export const ConfirmModal = ({
	title = "¿Estás seguro?",
	description = "Confirma si deseas realizar esta acción.",
	cancelButtonLabel = "Cancelar",
	confirmButtonLabel = "Confirmar",
	isOpen,
	onClose,
	onConfirm,
	isDisabled,
	variant = "default",
	...props
}: ConfirmModalProps) => {
	if (!isOpen) {
		return null;
	}

	return (
		<Modal title={title} description={description} isOpen={isOpen} onClose={onClose} {...props}>
			<div className="flex justify-end">
				<Button variant="outline" className="mr-4" onClick={onClose} disabled={isDisabled}>
					{cancelButtonLabel}
				</Button>
				<Button variant={variant} onClick={onConfirm} disabled={isDisabled}>
					{confirmButtonLabel}
				</Button>
			</div>
		</Modal>
	);
};
