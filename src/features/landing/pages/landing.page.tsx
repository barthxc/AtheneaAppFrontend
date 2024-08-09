import { Footer, Header, MainContent } from "@/features/landing/components";

export function LandingPage() {
	return (
		<div className="min-h-screen bg-[#0D5244]">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}
