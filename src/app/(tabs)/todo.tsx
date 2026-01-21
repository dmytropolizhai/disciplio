import { ActivityIndicator, View } from 'react-native';
import { TodoList } from '@/components/feature/todo/todo-list';
import { TodoControls } from '@/components/feature/todo/todo-controls';
import { Suspense } from 'react';

export default function ToDoScreen() {
    return (
        <Suspense fallback={<ActivityIndicator size="large" />}>
          <View className="flex flex-col p-4">
            <TodoControls />
            <TodoList />
          </View>
        </Suspense>
  );
}
