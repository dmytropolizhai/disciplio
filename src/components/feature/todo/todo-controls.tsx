import { View } from "react-native"
import { CreateTaskButton } from "../tasks/create-task-button"

export const TodoControls = () => {

    return (
        <View className="w-full p-4 h-25">
            <CreateTaskButton />

        </View>
    )
}
