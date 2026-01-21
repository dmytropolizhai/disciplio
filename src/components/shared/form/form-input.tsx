import { RegisterOptions } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui/input'
import { FormController } from './form-controller'

type FormInputProps = {
    rules?: RegisterOptions
} & InputProps

export function FormInput({ rules, ...props }: FormInputProps) {
    return (
        <FormController
            rules={rules}
            render={({ field }) => (
                <Input
                    {...props}
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            )}
        />
    )
}

