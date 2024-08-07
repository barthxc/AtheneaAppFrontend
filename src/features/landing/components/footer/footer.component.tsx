import { Link } from "react-router-dom";

import { Icons } from "@/features/core/components";

export const Footer = () => {
	return (
		// py-12
		<footer className="bg-muted pt-2">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-start gap-4">
					<Link to={"/"} className="flex items-center gap-2">
						<img className="h-8" src="https://athenea.netlify.app/Logo.png" alt="" />
						<span className="text-xl font-bold">Athenea</span>
					</Link>
					<div className="flex flex-col gap-2 text-muted-foreground">
						<div>
							<Icons.about className="w-4 h-4 inline-block mr-2" />
							<span>+34 (555) 123-4567</span>
						</div>
						<div>
							<Icons.contact className="w-4 h-4 inline-block mr-2" />
							<span>discapacitadosatheneanerva@gmail.com</span>
						</div>
						<div>
							<Icons.map className="w-4 h-4 inline-block mr-2" />
							<span>C. José Maria Pemán, 21, 21670 Nerva, Huelva</span>
						</div>
						<div>
							<Icons.map className="w-4 h-4 inline-block mr-2" />
							<span>C. José Maria Pemán, 21, 21670 Nerva, Huelva</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start gap-4">
					<h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
					<nav className="grid gap-2">
						<Link to={"/"} className="hover:underline">
							Inicio
						</Link>
						<Link to={"/about"} className="hover:underline">
							Nosotros
						</Link>
						<Link to={"/donation"} className="hover:underline">
							Donar
						</Link>
						<Link to={"/faq"} className="hover:underline">
							FAQ
						</Link>
					</nav>
				</div>
				<div className="flex flex-col items-start gap-4">
					<h4 className="text-lg font-semibold">Síguenos</h4>
					<div className="flex gap-4">
						<Link to={"/"} className="text-muted-foreground hover:text-primary" aria-label="GitHub">
							<Icons.gitHub className="w-6 h-6" />
						</Link>
						<Link to={"/"} className="text-muted-foreground hover:text-primary" aria-label="Twitter">
							<Icons.twitter className="w-6 h-6" />
						</Link>
						<Link to={"/"} className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
							<Icons.pizza className="w-6 h-6" />
						</Link>
						<Link to={"/"} className="text-muted-foreground hover:text-primary" aria-label="Facebook">
							<Icons.pizza className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</div>
			<div className="container mx-auto mt-8 text-center text-sm text-muted-foreground">&copy; 2024 Athenea.</div>
		</footer>
	);
};
