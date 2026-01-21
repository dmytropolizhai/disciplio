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