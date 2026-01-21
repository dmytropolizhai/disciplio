import { createContext, PropsWithChildren, useContext } from 'react'
import { View } from 'react-native'
import { useFormContext } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'

/**
 * Context type for a form field, providing access to the field's unique identifier.
 */
type FieldContextType = {
  /** The unique identifier for the form field. */
  id: string;
};

const FieldContext = createContext<FieldContextType | null>(null);

/**
 * Hook to access the current form field's context.
 * Must be used within a {@link FormField} component.
 *
 * @throws {Error} If used outside of a FormField provider.
 * @returns {FieldContextType} The field context containing the field ID.
 */
export const useField = () => {
  const ctx = useContext(FieldContext);
  if (!ctx) {
    throw new Error("FormInput must be inside FormField");
  }
  return ctx;
};

/**
 * Props for the {@link FormField} component.
 */
type FormFieldProps = {
  /** The unique identifier for the form field, used for linking labels and retrieving form errors. */
  id: string;
  /** Optional label text to display above the field input. */
  label?: string;
} & PropsWithChildren;

/**
 * A wrapper component for form inputs that provides context, accessibility labels,
 * and automatic error message rendering from `react-hook-form`.
 *
 * @example
 * ```tsx
 * <FormField id="email" label="Email Address">
 *   <Input placeholder="Enter your email" />
 * </FormField>
 * ```
 */
export function FormField({ id, label, children }: FormFieldProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[id as keyof typeof errors];

  return (
    <FieldContext.Provider value={{ id }}>
      <View className="w-full gap-2">
        {label && <Label nativeID={id}>{label}</Label>}

        {children}

        {error?.message && (
          <Text className="text-red-500">{String(error.message)}</Text>
        )}
      </View>
    </FieldContext.Provider>
  );
}

