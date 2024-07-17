import {
  FormControl,
  FormField as FormFieldUI,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { Control, FieldValues } from "react-hook-form";

interface FormFieldProps {
  formControl: Control<any>;
  name: keyof FieldValues;
  label: string;
  render(renderProps: any): React.ReactNode;
}

export const FormField = ({
  formControl,
  name,
  label,
  render,
  ...props
}: FormFieldProps) => {
  return (
    <FormFieldUI
      control={formControl}
      name={name}
      render={(renderProps) => (
        <FormItem>
          <FormLabel className="text-base">{label}</FormLabel>
          <FormControl>{render(renderProps)}</FormControl>
          <FormMessage className="text-sm" />
        </FormItem>
      )}
      {...props}
    />
  );
};
