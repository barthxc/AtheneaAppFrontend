import type { UniqueIdentifier } from "@dnd-kit/core";
import { ColumnType } from "..";
import { Task } from "..";
import { TaskType } from "..";

export interface Column {
  id: UniqueIdentifier;
  title: string;
}

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

export interface BoardColumnProps {
  column: Column;
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
