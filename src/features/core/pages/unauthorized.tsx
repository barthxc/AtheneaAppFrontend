import { useNavigate } from "react-router-dom";
import { Button } from "@/features/core/components/ui/button"; // Ajusta la ruta según tu estructura de proyecto

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        403
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">Acceso Denegado</h2>
      <p>
        No tienes permiso para acceder a esta página. Por favor, contacta con el
        administrador si crees que esto es un error.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => navigate(-1)} variant="default" size="lg">
          Regresar
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
