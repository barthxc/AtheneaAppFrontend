export interface ConfirmModalProps extends React.HTMLAttributes<HTMLDivElement> {
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
