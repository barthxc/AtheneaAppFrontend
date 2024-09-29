import { type default as React, cloneElement } from "react";
import { FormField, type FormFieldProps } from "@/features/core/components";
import { Button, Form, Heading, type HeadingProps, Input, Textarea } from "@/features/core/components/ui";
import { cn } from "@/features/core/lib/utils";

import type { EmailFormViewProps } from "@/features/email/types";

const EmailFormView = ({ loading, form, onSubmit, emailType, render }: EmailFormViewProps) => {
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-5xl space-y-8">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-7 justify-between">
							<EmailFormViewHeading
								component={render?.heading}
								title={emailType === "communication" ? "Formulario de contacto" : "Contactar con el Administrador"}
								description=""
							/>
						</div>

						{emailType === "communication" && (
							<div className="gap-4 md:grid md:grid-cols-3">
								<EmailFormViewFormField
									formControl={form.control}
									name="from"
									label="Email"
									render={{
										paragraph: render?.paragraph,
										errorParagraph: render?.errorParagraph,
										renderProp: ({ field }) => (
											<EmailFormViewInput
												loading={loading}
												component={render?.input}
												placeholder="Correo electrónico"
												{...field}
											/>
										),
									}}
								/>
							</div>
						)}

						<div className="gap-4 md:grid md:grid-cols-3">
							<EmailFormViewFormField
								formControl={form.control}
								name="title"
								label="Título"
								render={{
									paragraph: render?.paragraph,
									errorParagraph: render?.errorParagraph,
									renderProp: ({ field }) => (
										<EmailFormViewInput
											loading={loading}
											component={render?.input}
											placeholder="Encabezado"
											{...field}
										/>
									),
								}}
							/>
						</div>
					</div>

					<div className="gap-4 max-w-7xl">
						<EmailFormViewFormField
							formControl={form.control}
							name="msg"
							label="Mensaje"
							render={{
								paragraph: render?.paragraph,
								errorParagraph: render?.errorParagraph,
								renderProp: ({ field }) => (
									<EmailFormViewTextarea
										component={render?.textarea}
										loading={loading}
										placeholder="Mensaje"
										{...field}
									/>
								),
							}}
						/>
					</div>

					<EmailFormViewButton loading={loading} component={render?.button}>
						Enviar
					</EmailFormViewButton>
				</form>
			</Form>
		</>
	);
};

export default EmailFormView;

interface EmailFormViewFieldProps {
	component?: React.ReactElement;
	loading: boolean;
}

interface EmailFormViewHeadingProps
	extends Omit<EmailFormViewFieldProps, "loading">,
		Pick<HeadingProps, "title" | "description">,
		Omit<React.HTMLAttributes<HTMLHeadingElement>, "title"> {}
interface EmailFormViewInputProps extends EmailFormViewFieldProps, React.InputHTMLAttributes<HTMLInputElement> {}
interface EmailFormViewTextareaProps
	extends EmailFormViewFieldProps,
		React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
interface EmailFormViewButtonProps
	extends EmailFormViewFieldProps,
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		React.PropsWithChildren {}
interface EmailFormViewFormFieldProps extends FormFieldProps {}

const EmailFormViewHeading = ({ component: Component, title, description, ...props }: EmailFormViewHeadingProps) => {
	if (Component) {
		return cloneElement(Component, props, title);
	}

	return <Heading title={title} description={description} {...props} />;
};

const EmailFormViewInput = ({ component: Component, loading, ...fieldProps }: EmailFormViewInputProps) => {
	const props = { disabled: loading, ...fieldProps };
	if (Component) {
		return cloneElement(Component, props);
	}

	return <Input {...props} />;
};

const EmailFormViewTextarea = ({ component: Component, loading, ...fieldProps }: EmailFormViewTextareaProps) => {
	const props = { disabled: loading, className: cn("min-h-24", Component?.props.className), ...fieldProps };
	if (Component) {
		return cloneElement(Component, props);
	}

	return <Textarea {...props} />;
};

const EmailFormViewButton = ({ component: Component, loading, children, ...fieldProps }: EmailFormViewButtonProps) => {
	const props = {
		disabled: loading,
		className: cn("ml-auto text-base", Component?.props.className),
		size: "lg" as const,
		children,
		...fieldProps,
	};
	if (Component) {
		return cloneElement(Component, props);
	}

	return <Button type="submit" {...props} />;
};

const EmailFormViewFormField = ({ render, formControl, name, label, ...props }: EmailFormViewFormFieldProps) => {
	return <FormField render={render} formControl={formControl} name={name} label={label} {...props} />;
};
