import { Footer, Header, MainContent } from "@/features/landing/components";

export function LandingPage() {
	return (
		<div className="min-h-screen bg-[#0D5244]">
			{/*<Toaster />
			<Header />
			
			<h1 className="text-4xl ">
				Asociación de Discapacitados <span className="text-blue-500 font-bold">Athenea</span> Sin Ánimo de Lucro
			</h1>
			<Footer />*/}
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}
