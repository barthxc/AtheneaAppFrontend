"use client";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { navItems } from "@/features/core/constants";
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
	const [open, setOpen] = useState(false);

	return (
		<>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<MenuIcon />
				</SheetTrigger>
				<SheetContent side="left" className="!p-0 overflow-auto" aria-describedby={undefined}>
					<VisuallyHidden>
						<SheetTitle>Navegación</SheetTitle>
					</VisuallyHidden>
					<div className="space-y-4 py-4">
						<div className="px-3 py-2">
							<h2 className="mb-2 text-lg font-semibold tracking-tight">Navegación</h2>
							<Separator />
							<div className="space-y-1">
								<DashboardNav items={navItems} isMobileNav={true} />
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};
