import type { Control, FieldValues } from "react-hook-form";

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
