import {
	Button,
	Form,
	FormControl,
	Heading,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Separator,
} from "@/components/ui";
import { Trash } from "lucide-react";

import type { CalendarFormViewProps } from "@/types";
import { FormField } from "@/components/forms";
import { ConfirmModal } from "@/components/modal";

export const CalendarFormView = ({
	initialData,
	loading,
	categories,
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
							name="name"
							label="Name"
							render={({ field }) => <Input disabled={loading} placeholder="Product name" {...field} />}
						/>

						<FormField
							formControl={form.control}
							name="description"
							label="Description"
							render={({ field }) => <Input disabled={loading} placeholder="Product description" {...field} />}
						/>

						<FormField
							formControl={form.control}
							name="price"
							label="Price"
							render={({ field }) => <Input type="number" disabled={loading} {...field} />}
						/>

						<FormField
							formControl={form.control}
							name="category"
							label="Category"
							render={({ field }) => (
								<Select
									disabled={loading}
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue defaultValue={field.value} placeholder="Select a category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categories.map((category) => (
											<SelectItem key={category._id} value={category._id}>
												{category.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
						/>
					</div>

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
