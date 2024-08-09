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
	return (
		<Sheet>
			<SheetTrigger className="mr-12">
				<Icons.menu color="#FFF" />
			</SheetTrigger>
			<SheetContent icon={Icons.close} includeCloseIcon={false} className="flex flex-col gap-10">
				<SheetHeader className="flex flex-row justify-between items-center">
					<SheetTitle>Menu</SheetTitle>
					<SheetClose className="!mt-0">
						<Icons.close />
					</SheetClose>

					<SheetDescription className="sr-only">Navigation menu</SheetDescription>
				</SheetHeader>

				<NavbarLinks isMobile />
			</SheetContent>
		</Sheet>
	);
};
