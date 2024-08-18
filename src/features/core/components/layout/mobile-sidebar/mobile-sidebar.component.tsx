"use client";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";

import { navItems, visitortNavItems } from "@/features/core/constants";
import { DashboardNav } from "@/features/core/components";
import {
	Separator,
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
	VisuallyHidden,
} from "@/features/core/components/ui";

export const MobileSidebar = () => {
	const location = useLocation();
	const path = location.pathname;
	const isLanding = !path.startsWith("/dashboard");
	const [open, setOpen] = useState(false);

	return (
		<>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<MenuIcon />
				</SheetTrigger>
				<SheetContent side="left" className="!px-0" aria-describedby={undefined}>
					<VisuallyHidden>
						<SheetTitle>Navegación</SheetTitle>
					</VisuallyHidden>
					<div className="space-y-4 py-4">
						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Navegación</h2>
							<Separator />
							<div className="space-y-1">
								<DashboardNav items={isLanding ? visitortNavItems : navItems} isMobileNav={true} setOpen={setOpen} />
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};