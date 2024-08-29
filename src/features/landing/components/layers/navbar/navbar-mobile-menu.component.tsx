import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Icons } from "@/features/core/components";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/features/core/components/ui";

import { NavbarLinks } from "@/features/landing/components";

export const NavbarMobileMenu = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const pathname = useLocation().pathname;

	// biome-ignore lint/correctness/useExhaustiveDependencies: It must set the state each time the user navigates
	useEffect(() => setOpen(false), [pathname]);

	return (
		<Sheet onOpenChange={setOpen} open={isOpen}>
			<SheetTrigger className="mr-10">
				<Icons.menu color="white" />
			</SheetTrigger>
			<SheetContent
				icon={Icons.close}
				includeCloseIcon={false}
				className="flex flex-col gap-10 bg-[#FAFAFA] h-full overflow-auto">
				<SheetHeader className="flex flex-row justify-between items-center">
					<SheetTitle>Menú</SheetTitle>
					<SheetClose className="!mt-0">
						<Icons.close />
					</SheetClose>

					<SheetDescription className="sr-only">Menú de navegación</SheetDescription>
				</SheetHeader>

				<NavbarLinks isMobile />
			</SheetContent>
		</Sheet>
	);
};
