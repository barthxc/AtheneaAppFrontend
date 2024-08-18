import type { ValidRoles } from "@/features/auth/types";

export interface ProtectedRouteProps {
	allowedRoles: ValidRoles[];
	children: React.ReactNode;
}
