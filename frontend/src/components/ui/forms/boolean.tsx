import { UseFormReturn, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Checkbox } from "../checkbox";

type CustomInputProps<TFormValues extends Record<string, any>> = {
  form: UseFormReturn<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  classname?: string;
  helpText?: string;
};

export type FormBooleanProps<TFormValues extends Record<string, any>> = CustomInputProps<TFormValues> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "name">;

export function FormBoolean<TFormValues extends Record<string, any>>({
  form,
  name,
  label,
  classname,
  helpText,
  required = false,
  type = "text",
  ...props
}: FormBooleanProps<TFormValues>) {
  return (
    <div className={classname}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label ? (
              <FormLabel>
                {label}
                {required ? <span className="text-destructive">*</span> : ""}
              </FormLabel>
            ) : null}

            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
}
