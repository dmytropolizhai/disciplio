import { ButtonProps } from '@/components/ui/button'
import { cloneElement, ReactElement, isValidElement } from 'react'
import {
    FieldValues,
    SubmitErrorHandler,
    SubmitHandler,
    useFormContext,
} from 'react-hook-form'
/**
 * Props for the {@link FormSubmit} component.
 * @template T - The shape of the form data.
 */
type FormSubmitProps<T extends FieldValues> = Omit<ButtonProps, 'onPress'> & {
    /**
     * Callback invoked when the form is successfully submitted.
     */
    onSubmit: SubmitHandler<T>
    /**
     * Optional callback invoked when form submission fails due to validation errors.
     */
    onError?: SubmitErrorHandler<T>
    /**
     * The button element to be rendered and enhanced with the submit handler.
     */
    children: ReactElement<ButtonProps>
}

/**
 * A component that handles form submission by wrapping a button.
 * It uses the form context to trigger the submit handler.
 * 
 * @template T - The shape of the form data.
 * @param props - Properties for the FormSubmit component.
 * @returns The enhanced button element or null if the child is invalid.
 */
export function FormSubmit<T extends FieldValues>({
    onSubmit,
    onError,
    children,
    ...props
}: FormSubmitProps<T>) {
    const { handleSubmit } = useFormContext<T>()

    if (!isValidElement(children)) {
        return null
    }

    return cloneElement(children, {
        ...props,
        onPress: handleSubmit(onSubmit, onError),
    })
}
