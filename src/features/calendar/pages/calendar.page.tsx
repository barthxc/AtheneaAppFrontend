import { ScrollArea } from "@/features/core/components/ui";

import { CalendarForm } from "@/features/calendar/components";

export function CalendarPage() {
	return (
		<>
			<ScrollArea className="h-full">
				<div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
					<CalendarForm initialData={null} key={null} />
				</div>
			</ScrollArea>
		</>
	);
}
