import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
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

import type { CalendarFormValues, CalendarFormViewProps } from "@/types";
import type { Control } from "react-hook-form";

export const CalendarFormView = ({
	initialData,
	loading,
	categories,
	open,
	setOpen,
	form,
	onSubmit,
	onDelete,
}: CalendarFormViewProps) => {
	const title = initialData ? "Edit product" : "Gestion del Calendario";
	const description = initialData ? "Edit a product." : "yeah";
	const action = initialData ? "Save changes" : "Create";

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
					<Button disabled={loading} variant="destructive" size="sm" onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>

			<Separator />

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
					<div className="gap-8 md:grid md:grid-cols-3">
						<CalendarFormField
							formControl={form.control}
							name="name"
							label="Name"
							render={({ field }) => <Input disabled={loading} placeholder="Product name" {...field} />}
						/>

						<CalendarFormField
							formControl={form.control}
							name="description"
							label="Description"
							render={({ field }) => <Input disabled={loading} placeholder="Product description" {...field} />}
						/>

						<CalendarFormField
							formControl={form.control}
							name="price"
							label="Price"
							render={({ field }) => <Input type="number" disabled={loading} {...field} />}
						/>

						<CalendarFormField
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
		</>
	);
};

interface CalendarFormFieldProps {
	formControl: Control<CalendarFormValues>;
	name: keyof CalendarFormValues;
	label: string;
	render(renderProps: any): React.ReactNode;
}

const CalendarFormField = ({ formControl, name, label, render, ...props }: CalendarFormFieldProps) => {
	return (
		<FormField
			control={formControl}
			name={name}
			render={(renderProps) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>{render(renderProps)}</FormControl>
					<FormMessage />
				</FormItem>
			)}
			{...props}
		/>
	);
};
