import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/features/auth/stores";
import { ScrollArea, Toaster } from "@/features/core/components/ui";
import { Header, Sidebar } from "@/features/core/components";
import { useSidebar } from "@/features/core/hooks";
import { cn } from "@/features/core/lib/utils";

export const DashboardLayout = () => {
	const authStatus = useAuthStore((state) => state.status);
	const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);
	const { isMinimized } = useSidebar();

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
			<div className="flex justify-between items-start h-screen">
				<Sidebar />
				<main className={cn("pt-20 flex-1 w-full", isMinimized ? "md:w-[calc(100%-5rem)]" : "md:w-[calc(100%-18rem)]")}>
					{/* viewport height - navbar height */}
					<div className="space-y-4 p-8">
						<Outlet />
					</div>
				</main>
			</div>
		</>
	);
};
