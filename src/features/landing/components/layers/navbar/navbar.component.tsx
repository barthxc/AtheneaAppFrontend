import { cn } from "@/features/core/lib/utils";
import { useIsHome, useViewportSize } from "@/features/core/hooks";

import { Logo, NavbarLinks, NavbarMobileMenu } from "@/features/landing/components";

export const Navbar = () => {
	const { isMobileSize } = useViewportSize();
	const isHome = useIsHome();

	return (
		<div className={cn("bg-transparent absolute top-0 left-0 w-full h-20", !isHome && "bg-[#094074]")}>
			<div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
				<div className="flex-1 flex justify-start items-center px-10 xl:px-14 h-full">
					<Logo className={cn(isMobileSize || !isHome ? "text-white" : null)} />
				</div>
				{isMobileSize ? <NavbarMobileMenu /> : <NavbarLinks isHome={isHome} />}
			</div>
		</div>
	);
};
