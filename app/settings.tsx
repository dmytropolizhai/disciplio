import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardTitle
} from "@/components/core/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Stack } from "expo-router";
import { View } from "react-native";


export default function SettingsScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Settings" }} />
            <View className="m-4">
                <Card className="p-4 flex-row">
                    <View className="flex flex-col justify-center">
                        <CardTitle>Theme</CardTitle>
                        <CardDescription>Theme</CardDescription>
                    </View>
                    <CardContent className="flex-1 items-end">
                        <ThemeToggle />
                    </CardContent>
                </Card>
            </View>
        </>
    )
}