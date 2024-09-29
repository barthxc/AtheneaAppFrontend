import { Link } from "react-router-dom";

import { cn } from "@/features/core/lib/utils";
import { MobileSidebar } from "@/features/core/components";

export const Header = () => {
	return (
		<div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
			<nav className="flex h-20 items-center justify-start gap-10 px-4">
				<div className={cn("block md:!hidden")}>
					<MobileSidebar />
				</div>

				<Link
					to="/"
					className={cn(
						" items-center gap-2 overflow-hidden rounded-lg py-2 text-2xl font-medium   transparent transform hover:rotate-3 transition duration-300",
					)}>
					<img src="https://athenea.netlify.app/Logo.png" width={50} alt="" />
				</Link>
			</nav>
		</div>
	);
};
