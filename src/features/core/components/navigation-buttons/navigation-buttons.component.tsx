import { useNavigate } from "react-router-dom";

import { Button } from "@/features/core/components/ui";
import type { NavigationButtonsProps } from "@/features/core/components";
import { useAuthStore } from "@/features/auth/stores";

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ pdf }) => {
	const status = useAuthStore((state) => state.status);
	const isLogged = status === "authorized";
	const navigate = useNavigate();

	return (
		<div className="mt-8 flex justify-center gap-2">
			{isLogged && (
				<Button onClick={() => navigate(pdf ? -2 : -1)} variant="default" size="lg">
					Volver
				</Button>
			)}

			<Button
				onClick={() => navigate(isLogged ? "/dashboard" : "/")}
				variant={isLogged ? "ghost" : "default"}
				size="lg">
				Volver al Inicio
			</Button>
		</div>
	);
};
