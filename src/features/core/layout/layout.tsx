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
				<main className="flex-1 overflow-hidden pt-16">
					<ScrollArea className="h-full">
						<div className="flex-1 space-y-4 p-8">
							<Outlet />
						</div>
					</ScrollArea>
				</main>
			</div>
		</>
	);
}
