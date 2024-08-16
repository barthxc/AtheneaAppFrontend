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
import { useIsHome } from "@/features/core/hooks";

import { NavbarLinks } from "@/features/landing/components";

export const NavbarMobileMenu = () => {
  const isHome = useIsHome();

  return (
    <Sheet>
      <SheetTrigger className="mr-10">
        <Icons.menu color={isHome ? "black" : "white"} />
      </SheetTrigger>
      <SheetContent
        icon={Icons.close}
        includeCloseIcon={false}
        className="flex flex-col gap-10 bg-[#FAFAFA]">
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle>Menu</SheetTitle>
          <SheetClose className="!mt-0">
            <Icons.close />
          </SheetClose>

          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
        </SheetHeader>

        <NavbarLinks isMobile />
      </SheetContent>
    </Sheet>
  );
};
