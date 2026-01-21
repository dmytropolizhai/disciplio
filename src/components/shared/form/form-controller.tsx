import { Controller, ControllerProps } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { useField } from "./form-field";
/**
 * A wrapper around react-hook-form's `Controller` component that automatically
 * connects to the parent form context and uses the field ID provided by the `FormField` context.
 *
 * @param props - The properties to pass to the `Controller` component, excluding `name` and `control`.
 */
export function FormController(props: Omit<ControllerProps, "name" | "control">) {
    const { control } = useFormContext();
    const { id } = useField();

    return (
        <Controller
            name={id}
            control={control}
            {...props}
        />
    );
}
