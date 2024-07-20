import type { UniqueIdentifier } from "@dnd-kit/core";

import type { ColumnType, Task, TaskType } from "@/features/kanban/types";

export interface ColumnInterface {
	id: UniqueIdentifier;
	title: string;
}

export interface ColumnDragData {
	type: ColumnType;
	column: ColumnInterface;
}

export interface BoardColumnProps {
	column: ColumnInterface;
	tasks: Task[];
	isOverlay?: boolean;
}

export interface TaskCardProps {
	task: Task;
	isOverlay?: boolean;
}

export interface TaskDragData {
	type: TaskType;
	task: Task;
}
