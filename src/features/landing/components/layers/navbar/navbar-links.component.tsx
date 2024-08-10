import { cn } from "@/features/core/lib/utils";

import type { NavbarLinksProps } from "@/features/landing/types";
import { Button, Link } from "@/features/landing/components";

export const NavbarLinks = ({ className, isMobile, ...props }: NavbarLinksProps) => {
	return (
		<nav className={cn(!isMobile && "px-12 flex-[2] flex justify-between items-center h-full")}>
			<ul
				className={cn(
					"flex",
					isMobile
						? "flex-col items-start gap-5 [&>li]:w-full [&_a]:block [&_a]:py-2"
						: "justify-start items-center gap-10 text-white",
					className,
				)}
				{...props}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="#about-us">About us</Link>
				</li>
				<li>
					<Link to="#campaigns">Campaigns</Link>
				</li>
				<li>
					<Link to="#blog">Blog</Link>
				</li>
				<li>
					<Link to="#contact">Contact</Link>
				</li>
				{isMobile && <DonateLink isMobile />}
			</ul>
			{!isMobile && <DonateLink />}
		</nav>
	);
};

const DonateLink = ({ isMobile }: { isMobile?: boolean }) => {
	return (
		<>
			<Button
				asChild
				size="md"
				className={cn(isMobile ? "bg-[#0D5244] text-white w-max mx-auto" : "bg-white text-black")}>
				<Link to="/donate">Donate</Link>
			</Button>
		</>
	);
};
