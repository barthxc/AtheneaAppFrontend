import { Link, Navigate } from "react-router-dom";

import { Separator } from "@/features/core/components/ui";
import { AuthForm } from "@/features/auth/components";
import { useAuthStore } from "@/features/auth/stores";

export function AuthPage() {
	const authStatus = useAuthStore((state) => state.status);
	const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

	if (authStatus === "pending") {
		checkAuthStatus();
	}

	if (authStatus === "authorized") {
		return <Navigate to="/dashboard" />;
	}

	return (
		<div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
				<div className="absolute inset-0 bg-[#091339]" />
				<div className="relative z-20 flex flex-col items-center text-lg font-medium">
					<p className="text-4xl pb-4">Portal Athenea</p>
					<img src="/athenea-logo.svg" width={"400"} alt="Logo de Discapacitados Athenea" />
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&rdquo;El desarrollo progresivo del hombre es vitalmente dependiente de la invención. Es el producto más
							importante de su cerebro creativo.&rdquo;
						</p>
						<footer className="flex flex-row items-start justify-around gap-10">
							<div className="text-xl flex flex-col gap-2">
								<p>Template</p>
								<Separator />

								<Link
									className="text-sm"
									to={"https://github.com/Kiranism/next-shadcn-dashboard-starter"}
									target="_blank">
									Kiranism
								</Link>
							</div>
							<div className="text-xl flex flex-col gap-2">
								<p>Desarrolladores</p>
								<Separator />

								<Link className="text-sm" to={"https://github.com/FOWMind"} target="_blank">
									FOWMind
								</Link>

								<Link className="text-sm" to={"https://github.com/barthxc"} target="_blank">
									BartHxC
								</Link>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
			<div className="flex h-full items-center p-4 lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Ingresa a tu cuenta</h1>
						<p className="text-sm text-muted-foreground">Accede con tu correo y contraseña</p>
					</div>
					<AuthForm />
				</div>
			</div>
		</div>
	);
}
