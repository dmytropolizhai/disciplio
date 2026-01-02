import { View } from "react-native";
import { TaskList } from '@/components/feature/task/task-list';

export default function HomeScreen() {
    return (
        <>
            <View className="flex-1 items-center justify-center gap-8 p-4">
                <TaskList tasks={[
                  { name: "Do homework", description: "Do homework due september." },
                  { name: "Meeting", description: "Meeting" },
                ]}/>
            </View>
        </>
    )
}