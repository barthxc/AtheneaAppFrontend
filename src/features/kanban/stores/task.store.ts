import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import type { UniqueIdentifier } from "@dnd-kit/core";

import { type ColumnInterface, defaultCols, type State, type Task } from "@/features/kanban/types";

//TODO VERIFICAR (?)

export type Actions = {
	addTask: (title: string, description?: string) => void;
	addCol: (title: string) => void;
	dragTask: (id: string | null) => void;
	removeTask: (title: string) => void;
	removeCol: (id: UniqueIdentifier) => void;
	setTasks: (updatedTask: Task[]) => void;
	setCols: (cols: ColumnInterface[]) => void;
	updateCol: (id: UniqueIdentifier, newName: string) => void;
};

export const useTaskStore = create<State & Actions>()(
	persist(
		(set) => ({
			tasks: [],
			columns: defaultCols,
			draggedTask: null,
			addTask: (title: string, description?: string) =>
				set((state) => ({
					tasks: [...state.tasks, { id: uuid(), title, description, status: "TODO" }],
				})),
			updateCol: (id: UniqueIdentifier, newName: string) =>
				set((state) => ({
					columns: state.columns.map((col) => (col.id === id ? { ...col, title: newName } : col)),
				})),
			addCol: (title: string) =>
				set((state) => ({
					columns: [...state.columns, { id: uuid(), title }],
				})),
			dragTask: (id: string | null) => set({ draggedTask: id }),
			removeTask: (id: string) =>
				set((state) => ({
					tasks: state.tasks.filter((task) => task.id !== id),
				})),
			removeCol: (id: UniqueIdentifier) =>
				set((state) => ({
					columns: state.columns.filter((col) => col.id !== id),
				})),
			setTasks: (newTasks: Task[]) => set({ tasks: newTasks }),
			setCols: (newCols: ColumnInterface[]) => set({ columns: newCols }),
		}),
		{ name: "task-store", skipHydration: true },
	),
);
