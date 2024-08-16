import { cloneElement } from "react";
import type { Control, FieldValues } from "react-hook-form";

import { cn } from "@/features/core/lib/utils";
import { FormControl, FormField as FormFieldUI, FormItem, FormLabel, FormMessage } from "@/features/core/components/ui";

export interface FormFieldProps {
	formControl: Control<any>;
	name: keyof FieldValues;
	label: string;
	render: {
		renderProp(renderProps: any): React.ReactNode;
		paragraph?: React.ReactElement;
		errorParagraph?: React.ReactElement;
	};
}

export const FormField = ({ formControl, name, label, render, ...props }: FormFieldProps) => {
	const { paragraph: Paragraph, errorParagraph: ErrorParagraph, renderProp } = render;
	const labelProps = {
		className: cn("text-base font-medium", Paragraph?.props.className),
	};

	return (
		<FormFieldUI
			control={formControl}
			name={name}
			render={(renderProps) => (
				<FormItem>
					{Paragraph ? cloneElement(Paragraph, labelProps, label) : <FormLabel {...labelProps}>{label}</FormLabel>}
					<FormControl>{renderProp(renderProps)}</FormControl>
					<FormMessage className="text-sm" component={ErrorParagraph} />
				</FormItem>
			)}
			{...props}
		/>
	);
};
