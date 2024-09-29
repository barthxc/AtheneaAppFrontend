import type { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Toaster,
	useToast,
} from "@/features/core/components/ui";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { useAuthStore } from "@/features/auth/stores";
import { authSchema } from "@/features/auth/schemas";

type UserFormValue = z.infer<typeof authSchema>;

export function AuthForm() {
	const [loading, setLoading] = useState(false);
	const loginUser = useAuthStore((state) => state.loginUser);
	const navigate = useNavigate();
	const { toast } = useToast();

	const defaultValues = {
		email: "",
		password: "",
	};

	const form = useForm<UserFormValue>({
		resolver: zodResolver(authSchema),
		defaultValues,
	});

	const onSubmit = async (data: UserFormValue) => {
		const { email, password } = data;
		setLoading(true);
		try {
			await loginUser(email, password);
			navigate("/dashboard");
		} catch (error: any) {
			if (!error?.statusCode) {
				toast({
					variant: "destructive",
					description: ErrorService.handleError("GENERIC", null),
				});
				return;
			}

			const errorMessage = ErrorService.handleError(error.statusCode, ERROR_MESSAGES.AUTH.LOGIN);
			toast({
				variant: "destructive",
				description: errorMessage,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Toaster />
			<Button
				type="button"
				disabled={loading}
				onClick={() => navigate("/")}
				className="absolute right-8 top-8 md:right-8 md:top-8">
				Volver
			</Button>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="ejemplo@correo.com" disabled={loading} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Introduce tu contraseña..." disabled={loading} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button disabled={loading} className="ml-auto w-full" type="submit">
						Iniciar Sesión
					</Button>
				</form>
			</Form>
		</>
	);
}
