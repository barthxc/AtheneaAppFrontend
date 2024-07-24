import { useNavigate } from "react-router-dom";
import { Button } from "@/features/core/components/ui/button"; // Ajusta la ruta según tu estructura de proyecto

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">
        Algo no está bien
      </h2>
      <p>
        Lo siento, la página que estás buscando no existe o ha sido alterada.
        Contacta con el desarrollador.
      </p>
      <p>Contacta con el desarrollador</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => navigate(-1)} variant="default" size="lg">
          Volver
        </Button>
        <Button
          onClick={() => navigate("/dashboard")}
          variant="ghost"
          size="lg">
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
}
