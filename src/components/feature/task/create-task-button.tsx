import { AddButton } from "@/components/shared/add-button";
import { useRouter } from "expo-router";

export function CreateTaskButton() {
    const router = useRouter()

    return (
        <AddButton onPress={() => router.push("/(modals)/create-task")} />
    )
}