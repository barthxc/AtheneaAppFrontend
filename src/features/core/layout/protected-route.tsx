import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/stores";
import type { ValidRoles } from "@/features/auth/types";

interface ProtectedRouteProps {
  allowedRoles: ValidRoles[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  children,
}) => {
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

export default ProtectedRoute;
