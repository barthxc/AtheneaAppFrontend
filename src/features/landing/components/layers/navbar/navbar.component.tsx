import { cn } from "@/features/core/lib/utils";
import { useViewportSize } from "@/features/core/hooks";

import { Logo, NavbarLinks, NavbarMobileMenu } from "@/features/landing/components";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
	const { isMobileSize } = useViewportSize();
	const isHome = useLocation().pathname === "/";

	return (
		<div
			className={cn(
				"bg-transparent flex justify-between items-center absolute top-0 left-0 w-full h-20",
				!isHome && "bg-[#094074]",
			)}>
			<div className="flex-1 flex justify-start items-center px-14 h-full">
				<Logo className={cn(isHome && "text-black")} />
			</div>
			{isMobileSize ? <NavbarMobileMenu /> : <NavbarLinks />}
		</div>
	);
};
