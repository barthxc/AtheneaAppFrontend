import { cn } from "@/features/core/lib/utils";
import { Button } from "../ui";

interface ConfirmModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	cancelButtonLabel?: string;
	confirmButtonLabel?: string;
	onCancel(): void;
	onConfirm(): void;
	isConfirmButtonDisabled?: boolean;
	variant?: "destructive" | "default";
}

export const ConfirmModal = ({
	title,
	cancelButtonLabel,
	confirmButtonLabel,
	onCancel,
	onConfirm,
	isConfirmButtonDisabled,
	variant = "default",
	className,
	...props
}: ConfirmModalProps) => {
	return (
		<div
			className={cn("fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50", className)}
			{...props}>
			<div className="bg-white p-8 rounded shadow-md max-w-md">
				<p className="text-lg font-semibold mb-4">{title}</p>
				<div className="flex justify-end">
					<Button variant="outline" className="mr-4" onClick={onCancel}>
						{cancelButtonLabel ?? "Cancelar"}
					</Button>
					<Button variant={variant} onClick={onConfirm} disabled={isConfirmButtonDisabled}>
						{confirmButtonLabel ?? "Confirmar"}
					</Button>
				</div>
			</div>
		</div>
	);
};
