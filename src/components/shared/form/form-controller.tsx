import { Controller, ControllerProps } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { useField } from "./form-field";

export function FormController(props: Omit<ControllerProps, "name" | "control">) {
    const { control } = useFormContext()
    const { id } = useField()

    return (
        <Controller
            name={id}
            control={control}
            {...props}
        />
    )
}
