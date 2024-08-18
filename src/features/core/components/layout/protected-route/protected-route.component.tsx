import { Navigate } from "react-router-dom";

import type { ProtectedRouteProps } from "@/features/core/components";
import { useAuthStore } from "@/features/auth/stores";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
	const { userRole, status } = useAuthStore((state) => ({
		userRole: state.user?.roles || [],
		status: state.status,
	}));

	if (status !== "authorized") {
		return <Navigate to="/" replace />;
	}

	if (!allowedRoles.some((role) => userRole.includes(role))) {
		return <Navigate to="/unauthorized" replace />;
	}

	return <>{children}</>;
};
