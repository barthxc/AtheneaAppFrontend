// ? WHAT? 😳 Next isn't even installed || Answer: first need learn next like a pro :)
// import { Metadata } from 'next';
// import Link from 'next/link';
import { /*Link,*/ Link, Navigate } from "react-router-dom";
import { Separator } from "@/features/core/components/ui";
import { AuthForm } from "@/features/auth/components";
import { useAuthStore } from "@/features/auth/stores";
import { useNavigate } from "react-router-dom";
import { clientNavItems } from "@/features/core/constants/data";

// export const metadata: Metadata = {
//   title: 'Autenticación',
//   description: 'Authentication forms built using the components.'
// };

export function AuthPage() {
  const authStatus = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  const navigate = useNavigate();
  if (authStatus === "pending") {
    checkAuthStatus();
  }

  if (authStatus === "authorized") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 hidden md:right-8 md:top-8"
        )}>
        Login
      </Link> */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex flex-col items-center text-lg font-medium">
          <p className="text-4xl">Portal Athenea</p>
          <img
            src="https://athenea.netlify.app/Logo.png"
            width={"400"}
            alt=""
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              {/* &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;  */}
              &rdquo;El desarrollo progresivo del hombre es vitalmente
              dependiente de la invención. Es el producto más importante de su
              cerebro creativo.&rdquo;
            </p>
            Separator
            <footer className="flex flex-row items-start justify-around gap-10">
              <div className="text-xl flex flex-col gap-2">
                <p>Template</p>
                <Separator />

                <Link
                  className="text-sm"
                  to={
                    "https://github.com/Kiranism/next-shadcn-dashboard-starter"
                  }
                  target="_blank">
                  Kiranism
                </Link>
              </div>
              <div className="text-xl flex flex-col gap-2">
                <p>Desarrolladores</p>
                <Separator />

                <Link
                  className="text-sm"
                  to={"https://github.com/FOWMind"}
                  target="_blank">
                  Fowmind
                </Link>

                <Link
                  className="text-sm"
                  to={"https://github.com/barthxc"}
                  target="_blank">
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
            <h1 className="text-2xl font-semibold tracking-tight">
              Inicia Sesión
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tu Email y Contraseña para acceder
            </p>
          </div>
          <AuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            {/* <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link> */}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
