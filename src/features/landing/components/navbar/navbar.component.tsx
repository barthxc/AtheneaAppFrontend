import { useState } from "react";
import { Link } from "react-router-dom";

import { useViewportSize } from "@/features/core/hooks";
import { Icons } from "@/features/core/components";
import { cn } from "@/features/core/lib/utils";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { isMobileSize } = useViewportSize();
	return (
		<div className="flex justify-between items-center absolute top-0 left-0 w-full h-20">
			<div className="flex-1 flex justify-start items-center px-12 h-full">
				<h2 className="text-2xl font-semibold">Athenea</h2>
			</div>
			{isMobileSize && !open ? (
				<button type="button" aria-label="Menú" onClick={() => setOpen(true)}>
					<Icons.menu color="#FFF" className="mr-5" />
				</button>
			) : null}
			<nav
				className={cn(
					"h-full flex justify-between",
					!isMobileSize && "px-12 flex-[2] items-center",
					isMobileSize && !open ? "hidden" : null,
					isMobileSize && open ? "pb-7 flex-col fixed top-0 right-0 w-full max-w-sm bg-[#147c67]" : null,
				)}>
				<ul
					className={cn(
						"text-white",
						isMobileSize
							? "flex flex-col items-start [&>li]:w-full [&_a]:block [&_a]:p-2 [&_a]:px-5 hover:[&_a]:bg-[#0D5244]"
							: "flex justify-start items-center gap-10",
					)}>
					{isMobileSize && open ? (
						<button type="button" className="self-end mr-5 mb-5 relative z-50 mt-7" onClick={() => setOpen(false)}>
							<Icons.close color="#FFF" />
						</button>
					) : null}
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
				</ul>
				<Link to="/donate" className="py-2 px-5 bg-white text-black text-lg font-medium inline-block w-max mx-auto">
					Donate
				</Link>
			</nav>
		</div>
	);
};
