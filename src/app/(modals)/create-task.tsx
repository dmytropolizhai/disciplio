import { useTranslation } from "@/hooks/use-translation";
import { View } from "react-native";
import { AddButton } from "@/components/shared/add-button";
import { useTaskStore } from "@/stores/use-task-store";
import { NewTask } from "@/database/types";
import { router } from "expo-router";
import { Form, FormField, FormInput, FormSubmit } from "@/components/shared/form";
import { DatetimePicker, getTomorrow } from "@/components/shared/datetime-picker";
import { FormController } from "@/components/shared/form/form-controller";
import { Separator } from "@/components/ui/separator";


type CreateTaskForm = NonNullable<NewTask>
const defaultFormProps = {
    defaultValues: {
        name: "",
        description: "",
        deadlineDate: getTomorrow(),
    }
}



export default function CreateTaskModal() {
    const { t } = useTranslation("modals.create-task")
    const createTask = useTaskStore(state => state.createTask)

    function handleCreateTask(data: CreateTaskForm) {
        createTask({
            ...data,
            status: "pending",
        })

        router.replace("/todo")
    }

    return (
        <Form<CreateTaskForm> formProps={defaultFormProps} className="w-full h-full justify-between p-4">
            <View className="flex gap-4 flex-col">
                <FormField id="name" label={t("input.task-name.label")}>
                    <FormInput placeholder={t("input.task-name.placeholder")} rules={{ required: t("input.task-name.required"), maxLength: 25 }} />
                </FormField>

                <FormField id="description" label={t("input.task-description.label")}>
                    <FormInput placeholder={t("input.task-description.placeholder")} />
                </FormField>
                <FormField id="deadlineDate" label={t("input.task-deadline.label")}>
                    <FormController
                        rules={{ required: t("input.task-deadline.required") }}
                        render={({ field }) => (
                            <View className="flex flex-row justify-between">
                                <DatetimePicker
                                    displayValue={field.value.toLocaleDateString()}
                                    value={field.value}
                                    onChange={(e, date) => {
                                        if (date) field.onChange(date)
                                    }}
                                />
                                <Separator orientation="vertical" />
                                <DatetimePicker
                                    displayValue={field.value.toLocaleTimeString()}
                                    value={field.value}
                                    mode="time"
                                    onChange={(e, time) => {
                                        if (time) field.onChange(time)
                                    }}
                                />
                            </View>
                        )}
                    />
                </FormField>
            </View>
            <FormSubmit<CreateTaskForm> onSubmit={handleCreateTask} className="w-full mb-8">
                <AddButton />
            </FormSubmit>
        </Form >
    )
}
