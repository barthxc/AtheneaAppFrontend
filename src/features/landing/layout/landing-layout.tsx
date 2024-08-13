import { Outlet } from "react-router-dom";

import { Toaster } from "@/features/core/components/ui";

import { Footer, Wrapper } from "@/features/landing/components";
import { Navbar } from "@/features/landing/components";

export function LandingLayout() {
	return (
		<Wrapper>
			<Toaster />
			<div className="min-h-screen bg-[#094074] bg-pattern">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</Wrapper>
	);
}
