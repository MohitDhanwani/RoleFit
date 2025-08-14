import { UseFormReturn, Path } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Textarea } from "../textarea";

type CustomInputProps<TFormValues extends Record<string, any>> = {
  form: UseFormReturn<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  classname?: string;
  helpText?: string;
};

export type FormTextAreaProps<TFormValues extends Record<string, any>> = CustomInputProps<TFormValues> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "form" | "name">;

export function FormTextArea<TFormValues extends Record<string, any>>({
  form,
  name,
  label,
  description,
  placeholder,
  classname,
  helpText,
  required = false,
  ...props
}: FormTextAreaProps<TFormValues>) {
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
              <Textarea
                {...field}
                placeholder={placeholder}
                required={required}
                value={field.value === 0 || field.value === undefined ? "" : field.value}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  field.onChange(rawValue);
                }}
                {...props}
              />
            </FormControl>

            {description ? <FormDescription>{description}</FormDescription> : null}
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
}
