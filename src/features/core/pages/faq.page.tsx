import { Icons } from "@/features/core/components";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/features/core/components/ui";

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
              Athenea es una Asociación de Discapacitados sin ánimo de lucro
              fundada en 2006 que se dedica a realizar una importante labor
              social enfocada en la visibilización, valoración y promoción de la
              inclusión de personas con discapacidad. A lo largo de los años,
              Athenea ha trabajado incansablemente para derribar barreras,
              sensibilizar a la sociedad y crear oportunidades para que las
              personas con discapacidad puedan integrarse plenamente en todos
              los ámbitos de la vida. Su compromiso se refleja en diversas
              iniciativas que buscan fomentar la igualdad de derechos, el acceso
              a recursos y la participación activa de sus miembros en la
              comunidad.
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
              Athenea cuenta con un centro físico que ofrece servicios
              exclusivos o con tarifas reducidas para sus socios, como un
              gimnasio, un aula de informática, talleres de manualidades, y
              actividades especialmente diseñadas para niños muy pequeños, de
              entre 1 y 5 años, que presentan alguna discapacidad o cualquier
              tipo de necesidad especial. El centro está pensado para brindar un
              espacio seguro y enriquecedor donde estos pequeños puedan
              desarrollar sus habilidades, interactuar con otros niños, y
              recibir la atención personalizada que requieren para su bienestar
              y crecimiento.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-4 py-3 cursor-pointer">
            <h3 className="text-lg font-medium">
              ¿Es necesario tener una discapacidad para poder ser socio?
            </h3>
            <Icons.chevronDown className="h-5 w-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-background rounded-b-md px-4 py-3">
            <p className="text-muted-foreground">
              No, no es necesario tener una discapacidad para ser socio. La
              Asociación Athenea está abierta a todas las personas que deseen
              apoyar nuestra misión y participar en nuestras actividades, ya sea
              que tengan una discapacidad o no. Valoramos la diversidad y
              creemos que todos pueden contribuir a la inclusión y el bienestar
              de la comunidad.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
