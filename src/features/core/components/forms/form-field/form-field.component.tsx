import { cloneElement } from "react";

import { cn } from "@/features/core/lib/utils";
import { FormControl, FormField as FormFieldUI, FormItem, FormLabel, FormMessage } from "@/features/core/components/ui";
import type { FormFieldProps } from "@/features/core/components";

export const FormField = ({ formControl, name, label, render, ...props }: FormFieldProps) => {
	const { paragraph: Paragraph, errorParagraph: ErrorParagraph, renderProp } = render;
	const labelProps = {
		className: cn("text-base font-medium", Paragraph?.props.className),
	};

	return (
		<FormFieldUI
			control={formControl}
			name={name ?? ""}
			render={(renderProps) => (
				<FormItem>
					{label && (
						<>
							{Paragraph ? cloneElement(Paragraph, labelProps, label) : <FormLabel {...labelProps}>{label}</FormLabel>}
						</>
					)}
					<FormControl>{renderProp(renderProps)}</FormControl>
					<FormMessage className="text-sm" component={ErrorParagraph} />
				</FormItem>
			)}
			{...props}
		/>
	);
};
