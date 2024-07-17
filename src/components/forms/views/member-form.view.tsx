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
import { FormField } from "@/components/forms";
import type { MemberFormViewProps } from "@/types";
import { ConfirmModal } from "@/components/modal";

export const MemberFormView = ({
	initialData,
	loading,
	roles,
	showModal,
	openModal,
	closeModal,
	form,
	onSubmit,
	onDelete,
}: MemberFormViewProps) => {
	const title = initialData ? "Editar socio" : "Crear socio";
	const description = initialData ? "Edita el socio" : "Agrega un nuevo socio";
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
							label="Nombre"
							render={({ field }) => <Input disabled={loading} placeholder="Nombre del socio" {...field} />}
						/>

						<FormField
							formControl={form.control}
							name="role"
							label="Role"
							render={({ field }) => (
								<Select
									disabled={loading}
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue defaultValue={field.value} placeholder="Selecciona un rol" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{roles.map((role) => (
											<SelectItem key={role._id} value={role._id}>
												{role.name}
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
					title="¿Seguro que quieres eliminar este socio?"
					variant="destructive"
					onCancel={closeModal}
					onConfirm={onDelete}
					confirmButtonLabel="Eliminar socio"
					isConfirmButtonDisabled={loading}
				/>
			)}
		</>
	);
};
