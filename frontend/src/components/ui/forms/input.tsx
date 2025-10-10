import { UseFormReturn, Path } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "../input";

type CustomInputProps<TFormValues extends Record<string, any>> = {
  form?: UseFormReturn<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  classname?: string;
  helpText?: string;
};

export type FormInputProps<TFormValues extends Record<string, any>> = CustomInputProps<TFormValues> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "name">;

export function FormInput<TFormValues extends Record<string, any>>({
  form,
  name,
  label,
  description,
  placeholder,
  classname,
  helpText,
  required = false,
  type = "text",
  ...props
}: FormInputProps<TFormValues>) {
  return (
    <div className={classname}>
      <FormField
        control={form?.control}
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
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                required={required}
                value={field.value === 0 || field.value === undefined ? "" : field.value}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  let value;

                  if (type == "number") {
                    value = rawValue === "" ? undefined : Number(rawValue);
                  } else {
                    value = rawValue;
                  }

                  field.onChange(value);
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
