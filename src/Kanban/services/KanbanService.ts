import { Active, DataRef, Over } from "@dnd-kit/core";
import { DraggableData } from "../types";

export class KanbanService {
  static hasDraggableData<T extends Active | Over>(
    entry: T | null | undefined
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
