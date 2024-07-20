import { Trash } from "lucide-react";

import { Button, Form, Heading, Input, Separator } from "@/features/core/components/ui";
import { FormField } from "@/features/core/components/forms";
import { ConfirmModal } from "@/features/core/components/modal";
import { CalendarDateRangePicker } from "@/features/core/components/date-range-picker";

import type { CalendarFormViewProps } from "@/features/calendar/types";

export const CalendarFormView = ({
	initialData,
	loading,
	showModal,
	openModal,
	closeModal,
	form,
	onSubmit,
	onDelete,
}: CalendarFormViewProps) => {
	const title = initialData ? "Editar calendario" : "Gestión del calendario";
	const description = initialData ? "Edita el calendario." : "Gestiona el calendario.";
	const action = initialData ? "Guardar" : "Crear";

	return (
		<>
			{/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{initialData && (
					<Button disabled={loading} variant="destructive" size="sm" onClick={openModal}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>

			<Separator />

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
					<div className="gap-8 md:grid md:grid-cols-3">
						<FormField
							formControl={form.control}
							name="title"
							label="Título"
							render={({ field }) => <Input disabled={loading} placeholder="Título" {...field} />}
						/>
						<CalendarDateRangePicker />
					</div>

					<div className="items-center space-x-2 md:flex" />

					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>

			{/* Modal de confirmación de eliminación */}
			{showModal && (
				<ConfirmModal
					title="¿Seguro que quieres eliminar este calendario?"
					variant="destructive"
					onCancel={closeModal}
					onConfirm={onDelete}
					confirmButtonLabel="Eliminar calendario"
					isConfirmButtonDisabled={loading}
				/>
			)}
		</>
	);
};
