// import { KanbanBoard } from "@/components/kanban/kanban-board";
// import NewTaskDialog from "@/components/kanban/new-task-dialog";
// import { Heading } from "@/components/ui/heading";
import { CalendarForm } from "@/components/forms/calendar-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Calendar() {
	return (
		<>
			<ScrollArea className="h-full">
				<div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
					<CalendarForm
						categories={[
							{ _id: "shirts", name: "shirts" },
							{ _id: "pants", name: "pants" },
						]}
						initialData={null}
						key={null}
					/>
					{/* <NewTaskDialog /> */}
					{/* <KanbanBoard /> */}
				</div>
			</ScrollArea>
		</>
	);
}
