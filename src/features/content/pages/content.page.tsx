import { Heading, Tabs, TabsContent, TabsList, TabsTrigger } from "@/features/core/components/ui";
import { Collaborators, Events } from "@/features/content/components";

export function ContentPage() {
	return (
		<section>
			<Heading title="Gestor de Contenidos" className="mb-5" />
			<Tabs defaultValue="content" className="space-y-4">
				<TabsList>
					<TabsTrigger value="content">Eventos</TabsTrigger>
					<TabsTrigger value="colaborators">Colaboradores</TabsTrigger>
					<TabsTrigger value="installations">Instalaciones</TabsTrigger>
				</TabsList>
				<TabsContent value="content" className="space-y-4">
					<Events />
				</TabsContent>
				<TabsContent value="colaborators" className="space-y-4">
					<Collaborators />
				</TabsContent>
				<TabsContent value="installations" className="space-y-4">
					<Collaborators />
				</TabsContent>
			</Tabs>
		</section>
	);
}
