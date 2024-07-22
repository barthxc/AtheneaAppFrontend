import { useAuthStore } from "@/features/auth/stores/auth.store";
import Header from "./header";
import Sidebar from "./sidebar";
import { Navigate, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const authStatus = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (authStatus === "pending") {
    checkAuthStatus();
  }

  if (authStatus === "unauthorized") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">
          <Outlet />
        </main>
      </div>
    </>
  );
}
