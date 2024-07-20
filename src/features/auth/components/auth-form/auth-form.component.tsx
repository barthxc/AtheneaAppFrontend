import { Button } from "@/features/core/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/features/core/components/ui/form";
import { Input } from "@/features/core/components/ui/input";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type * as z from "zod";
import { Toaster, useToast } from "@/features/core/components/ui";
import { authSchema } from "@/features/auth/schemas";

//TODO CREAR authStore

type UserFormValue = z.infer<typeof authSchema>;

export function AuthForm() {
	const loginUser = useAuthStore((state) => state.loginUser);
	const navigate = useNavigate();
	const { toast } = useToast();

	const [loading, setLoading] = useState(false);
	//   const login = useAuthStore((state) => state.login);
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
			const res = await loginUser(email, password);
			console.log({ res });
			navigate("/dashboard");
		} catch (error: any) {
			/*
        TODO: Show a descriptive error depending of the error message
        ? Example: if the error isn't related with server, show something like 'Cannot find that user'
        ? Otherwise, show something like 'Something went wrong, try again later'
      */
			toast({
				variant: "destructive",
				description: "No se pudo encontrar ese usuario, verifica que los datos sean correctos.",
			});
			console.log("No se pudo autenticar");
		}
		setLoading(false);
		// await login(data.email, data.password);

		// if (response.status === 23232) {
		//   Toast;
		// }

		// signIn('credentials', {
		//   email: data.email,
		//   password: data.password,

		//   callbackUrl: callbackUrl ?? '/dashboard'
		// });
	};

	return (
		<>
			<Toaster />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="Introduce tu email..." disabled={loading} {...field} />
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
			{/*
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
       <GoogleSignInButton /> 
      </div>
       */}
		</>
	);
}
