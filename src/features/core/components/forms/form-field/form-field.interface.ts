import type {
	Control,
	ControllerFieldState,
	ControllerRenderProps,
	FieldValues,
	UseFormStateReturn,
} from "react-hook-form";

export interface RenderProps {
	field: ControllerRenderProps<any, string>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
}

export interface FormFieldProps {
	formControl: Control<any>;
	name: keyof FieldValues;
	label: string | null;
	render: {
		renderProp(renderProps: RenderProps): React.ReactNode;
		paragraph?: React.ReactElement;
		errorParagraph?: React.ReactElement;
	};
}
