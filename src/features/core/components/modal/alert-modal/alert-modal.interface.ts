export interface AlertModalProps {
	title?: string;
	description?: string;
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
}
