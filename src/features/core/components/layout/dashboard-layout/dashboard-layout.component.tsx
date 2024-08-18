import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/features/auth/stores";
import { ScrollArea, Toaster } from "@/features/core/components/ui";
import { Header, Sidebar } from "@/features/core/components";

export const DashboardLayout = () => {
	const authStatus = useAuthStore((state) => state.status);
	const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

	if (authStatus === "pending") {
		checkAuthStatus();
	}

	if (authStatus === "unauthorized") {
		return <Navigate to="/auth" replace />;
	}

	return (
		<>
			<Toaster />
			<Header />
			<div className="flex h-screen overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-hidden pt-14">
					<ScrollArea className="h-full">
						{/* viewport height - navbar height */}
						<div className="space-y-4 p-8 h-[calc(100vh-3.5rem)]">
							<Outlet />
						</div>
					</ScrollArea>
				</main>
			</div>
		</>
	);
};
