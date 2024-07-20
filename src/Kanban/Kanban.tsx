import { KanbanBoard } from "./components/KanbanBoard";
import { Heading } from "@/components/ui/heading";
import NewTaskDialog from "./components/NewTaskDialog";

export default function Kanban() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-start justify-between">
          <Heading title={`Tareas`} description="Administrador de Tareas" />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
