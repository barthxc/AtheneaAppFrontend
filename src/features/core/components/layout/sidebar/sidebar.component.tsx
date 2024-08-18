import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/features/core/lib/utils";
import { DashboardNav, type SidebarProps } from "@/features/core/components";
import { navItems, visitortNavItems } from "@/features/core/constants";
import { useSidebar } from "@/features/core/hooks";
import { useAuthStore } from "@/features/auth/stores";

export const Sidebar = ({ className }: SidebarProps) => {
	const { isMinimized, toggle } = useSidebar();
	const [status, setStatus] = useState(false);
	const userRole = useAuthStore((state) => state.userRole);
	const isVisitor = userRole?.length === 0;

	const handleToggle = () => {
		setStatus(true);
		toggle();
		setTimeout(() => setStatus(false), 500);
	};
	return (
		<nav
			className={cn(
				"relative hidden h-screen flex-none border-r z-10 pt-20 md:block",
				status && "duration-500",
				!isMinimized ? "w-72" : "w-[72px]",
				className,
			)}>
			<ChevronLeft
				className={cn(
					"absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
					isMinimized && "rotate-180",
				)}
				onClick={handleToggle}
			/>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="mt-3 space-y-1">
						<DashboardNav items={isVisitor ? visitortNavItems : navItems} />
					</div>
				</div>
			</div>
		</nav>
	);
};