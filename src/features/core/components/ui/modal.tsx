"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/features/core/components/ui";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, description, isOpen, onClose, children }) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={onChange}>
			<DialogContent className="overflow-auto max-h-[90%]">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};
