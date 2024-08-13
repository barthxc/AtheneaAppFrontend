import { useViewportSize } from "@/features/core/hooks";
import {
  Logo,
  NavbarLinks,
  NavbarMobileMenu,
} from "@/features/landing/components";

export const Navbar = () => {
  const { isMobileSize } = useViewportSize();
  return (
    <div className="flex justify-between  items-center absolute top-0 left-0 w-full h-20">
      <div className="flex-1 flex justify-start items-center px-14 h-full">
        <Logo className="text-black" />
      </div>
      {isMobileSize ? <NavbarMobileMenu /> : <NavbarLinks />}
    </div>
  );
};
