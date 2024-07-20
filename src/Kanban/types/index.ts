import type { UniqueIdentifier } from "@dnd-kit/core";
import { ColumnDragData, TaskDragData } from "./interfaces";

export type ColumnType = "Column";

export type TaskType = "Task";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export const defaultCols = [
  {
    id: "TODO" as const,
    title: "Todo",
  },
] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]["id"];

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  tasks: Task[];
  columns: Column[];
  draggedTask: string | null;
};

export interface Column {
  id: UniqueIdentifier;
  title: string;
}

export type DraggableData = ColumnDragData | TaskDragData;
