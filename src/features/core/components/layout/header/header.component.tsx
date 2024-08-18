import { Link, useLocation } from "react-router-dom";

import { cn } from "@/features/core/lib/utils";
import { visitortNavItems } from "@/features/core/constants";
import { MobileSidebar } from "@/features/core/components";

export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
	const isLanding = !path.startsWith("/dashboard");

	return (
		<div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
			<nav className="flex h-20 items-center justify-start gap-10 px-4">
				<div className={cn("block lg:!hidden")}>
					<MobileSidebar />
				</div>

				<Link
					to="/"
					className={cn(
						" items-center gap-2 overflow-hidden rounded-md py-2 text-2xl font-medium   transparent transform hover:rotate-3 transition duration-300",
					)}>
					<img src="https://athenea.netlify.app/Logo.png" width={50} alt="" />
				</Link>

				<div className="flex justify-between gap-10">
					{isLanding && (
						<>
							{visitortNavItems.map((item) => {
								return (
									<Link
										key={item.href}
										to={item.disabled ? "/" : item.href ?? "#"}
										className={cn(
											"hidden lg:flex sm:hidden items-center gap-2 overflow-hidden rounded-md py-2 text-2xl font-medium hover:bg-accent hover:text-accent-foreground",
											path === item.href ? "bg-accent" : "transparent",
											item.disabled && "cursor-not-allowed opacity-80",
										)}>
										{item.title}
									</Link>
								);
							})}
						</>
					)}
				</div>
			</nav>
		</div>
	);
};
