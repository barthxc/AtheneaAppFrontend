import { NavigationButtons } from "@/features/core/components";
import { useAuthStore } from "@/features/auth/stores";
import { Heading } from "@/features/landing/components";

export function NotFoundPage() {
	const status = useAuthStore((state) => state.status);
	const isLogged = status === "authorized";

	return isLogged ? (
		<div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
			<span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
				404
			</span>
			<h2 className="font-heading my-2 text-2xl font-bold">Algo no está bien</h2>
			<p>Lo siento, la página que estás buscando no existe o ha sido alterada. Contacta con el desarrollador.</p>
			<NavigationButtons pdf={false} />
		</div>
	) : (
		<div className="min-h-screen flex flex-col justify-center items-center bg-[#FAFAFA]">
			<Heading
				size="2xl"
				className="bg-gradient-to-b from-[#0a1d2b] to-[#2974ba] bg-clip-text text-transparent font-bold">
				Vaya!
			</Heading>
			<Heading className="font-heading my-2 text-2xl font-bold">Oops! Esta página no se pudo encontrar</Heading>
			<p>Parece que la página a la que intentaste ingresar no existe o se ha movido.</p>
			<NavigationButtons pdf={false} />
		</div>
	);
}
