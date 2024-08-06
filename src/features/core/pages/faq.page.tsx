import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import { Icons } from "../components";
export function FaqPage() {
  return (
    <div className="container mx-auto  px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-4 py-3 cursor-pointer">
            <h3 className="text-lg font-medium">¿Qué es Athenea?</h3>
            <Icons.chevronDown className="h-5 w-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-background rounded-b-md px-4 py-3">
            <p className="text-muted-foreground">
              Athenea es una asociación de discapacitados sin ánimo de lucro
              creada ____
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-4 py-3 cursor-pointer">
            <h3 className="text-lg font-medium">¿Qué ofrece la asociación?</h3>
            <Icons.chevronDown className="h-5 w-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-background rounded-b-md px-4 py-3">
            <p className="text-muted-foreground">
              Athenea tiene un centro físico que ofrece servicios exclusivos o
              rebajads para los socios como gimnacio, aula de informática,
              manualidadeso actividades para ____
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-4 py-3 cursor-pointer">
            <h3 className="text-lg font-medium">
              ¿Debo tener ___ para ser socio?
            </h3>
            <Icons.chevronDown className="h-5 w-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-background rounded-b-md px-4 py-3">
            <p className="text-muted-foreground">NO</p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
