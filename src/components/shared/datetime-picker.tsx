import { ComponentProps } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const today = new Date();
export const getTomorrow = () => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}

type DatetimePickerProps = ComponentProps<typeof DateTimePicker> & {
    displayValue: string
}

/**
 * A custom date and time picker component that renders a button trigger to display the native picker.
 * 
 * @param {DatetimePickerProps} props - The component props.
 * @param {Date} props.value - The currently selected date value.
 * @param {string} props.displayValue - The formatted string to display on the button trigger.
 * @param {(event: any, date?: Date) => void} props.onChange - Callback function triggered when the date changes.
 */

export const DatetimePicker = ({ value, onChange, displayValue, ...props }: DatetimePickerProps) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onPress={() => setShow(true)} variant="outline">
                <Text>{displayValue}</Text>
            </Button>
            {show && (
                <DateTimePicker
                    {...props}
                    value={value}
                    onChange={(e, date) => {
                        onChange?.(e, date)
                        setShow(false)
                    }}
                />
            )}
        </>
    )
}