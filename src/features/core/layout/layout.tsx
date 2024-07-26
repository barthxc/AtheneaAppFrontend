import { useAuthStore } from "@/features/auth/stores/auth.store";
import Header from "./header";
import Sidebar from "./sidebar";
import { Navigate, Outlet } from "react-router-dom";

import { ScrollArea, Toaster } from "@/features/core/components/ui";

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
			<Toaster />
			<Header />
			<div className="flex h-screen overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-hidden pt-14">
					<ScrollArea className="h-full">
						<div className="p-8 h-[calc(100vh-3.5rem)]">
							<Outlet />
						</div>
					</ScrollArea>
				</main>
			</div>
		</>
	);
}
