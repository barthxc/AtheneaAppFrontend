import { Link, useLocation } from "react-router-dom";

import { cn } from "@/features/core/lib/utils";
import { useSidebar } from "@/features/core/hooks";
import { ConfirmModal, Icons, type DashboardNavProps } from "@/features/core/components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/features/core/components/ui";
import { useAuthStore } from "@/features/auth/stores";
import { ValidRoles } from "@/features/auth/types";
import { useState } from "react";

export const DashboardNav = ({ items, isMobileNav = false }: DashboardNavProps) => {
	const { isMinimized } = useSidebar();
	const userRole = useAuthStore((state) => state.userRole) || [];
	const location = useLocation();
	const path = location.pathname;
	const [openModal, setOpenModal] = useState(false);

	if (!items?.length) {
		return null;
	}

	const handleLogout = async () => {
		useAuthStore.getState().logoutUser();
	};

	return (
		<nav className={cn("grid items-start gap-2", !isMobileNav && "justify-center")}>
			<ConfirmModal
				title="¿Seguro que deseas salir?"
				description=""
				confirmButtonLabel="Salir"
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				onConfirm={handleLogout}
				variant="destructive"
			/>
			<TooltipProvider>
				{items.map((item) => {
					const isVisible =
						userRole.includes(ValidRoles.admin) ||
						!item.validRole ||
						item.validRole.some((role) => userRole.includes(role));

					const Icon = Icons[item.icon || "arrowRight"];
					return (
						isVisible && (
							<Tooltip key={Symbol(item.title).description}>
								<TooltipTrigger asChild>
									<Link
										to={item.disabled ? "/" : item.href ?? "#"}
										className={cn(
											"flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
											path === item.href ? "bg-accent" : "transparent",
											item.disabled && "cursor-not-allowed opacity-80",
										)}
										onClick={() => {
											if (item.title === "Salir") {
												setOpenModal(true);
											}
										}}>
										<Icon className="size-5" />

										{isMobileNav || (!isMinimized && !isMobileNav) ? (
											<span className="mr-2 truncate">{item.title}</span>
										) : (
											""
										)}
									</Link>
								</TooltipTrigger>
								<TooltipContent
									align="center"
									side="right"
									sideOffset={8}
									className={!isMinimized ? "hidden" : "inline-block"}>
									{item.title}
								</TooltipContent>
							</Tooltip>
						)
					);
				})}
			</TooltipProvider>
		</nav>
	);
};
