import type { Active, DataRef, Over } from "@dnd-kit/core";

import type { DraggableData } from "@/features/kanban/types";

export class KanbanService {
	static hasDraggableData<T extends Active | Over>(
		entry: T | null | undefined,
	): entry is T & {
		data: DataRef<DraggableData>;
	} {
		if (!entry) {
			return false;
		}

		const data = entry.data.current;

		if (data?.type === "Column" || data?.type === "Task") {
			return true;
		}

		return false;
	}
}
