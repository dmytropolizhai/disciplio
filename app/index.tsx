import { Heading } from "@/components/ui/heading";
import { View } from "react-native";

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Heading className="text-xl font-bold text-primary-0">
                Disciplio
            </Heading>
        </View>
    )
}