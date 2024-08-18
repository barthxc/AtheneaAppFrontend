import { useNavigate } from "react-router-dom";

import { Button } from "@/features/core/components/ui";
import type { NavigationButtonsProps } from "@/features/core/components";

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ pdf }) => {
	const navigate = useNavigate();

	return (
		<div className="mt-8 flex justify-center gap-2">
			<Button onClick={() => navigate(pdf ? -2 : -1)} variant="default" size="lg">
				Volver
			</Button>
			<Button onClick={() => navigate("/dashboard")} variant="ghost" size="lg">
				Volver al Inicio
			</Button>
		</div>
	);
};