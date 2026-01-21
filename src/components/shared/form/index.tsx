import {
    FieldValues,
    FormProvider,
    UseFormProps,
    useForm,
} from 'react-hook-form'
import { PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'

/**
 * Props for the Form component.
 * @template T - The type of the form values.
 */
type FormProps<T extends FieldValues> = {
    /**
     * Optional configuration for the useForm hook.
     */
    formProps?: UseFormProps<T>
} & ViewProps & PropsWithChildren

/**
 * A wrapper component that provides form context using react-hook-form.
 * 
 * @template T - The type of the form values.
 * @param props - The props for the Form component.
 * @returns A FormProvider wrapping a View with the provided children.
 */
export function Form<T extends FieldValues>({
    children,
    formProps,
    ...viewProps
}: FormProps<T>) {
    const methods = useForm<T>(formProps)

    return (
        <FormProvider {...methods}>
            <View {...viewProps}>
                {children}
            </View>
        </FormProvider>
    )
}

export { FormSubmit } from "./form-submit" 
export { FormField } from "./form-field" 
export { FormInput } from "./form-input" 
