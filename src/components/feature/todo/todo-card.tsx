import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardProps, CardTitle } from '@ui/card';
import { DoneButton } from '@/components/shared/done-button';
import { useState } from 'react';
import { View } from 'react-native';
import { Task, TaskEvent, TaskStatus } from '@/database/types';
import { Text } from '@/components/ui/text';
import { DeleteButton } from '@/components/shared/delete-button';
import { useTaskStore } from '@/stores/use-task-store';

type TodoCardProps = {
  task: Task;
  onTaskCompleted?: TaskEvent;
}

export const TodoCard = ({ task, onTaskCompleted }: TodoCardProps) => {
  const { id, name, description } = task;
  const [status, setStatus] = useState<TaskStatus>(task.status);
  const deleteTask = useTaskStore(state => state.deleteTask);

  function handleTaskOnCompleted() {
    console.log(`Task ${id} completed`);
    setStatus("done");
    onTaskCompleted?.(task);
  }

  function handleTaskOnDelete() {
    console.log(`Task ${id} deleted`);
    deleteTask(task);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          {task.deadlineDate?.toDateString()}
        </Text>
      </CardContent>
      <CardFooter className="flex flex-row gap-4">
        <View className="w-full flex flex-row gap-4">
          <DoneButton isDone={status === "done"} onPress={handleTaskOnCompleted} />
          {status === "done" && <DeleteButton onPress={handleTaskOnDelete} />}
        </View>
      </CardFooter>
    </Card>
  );
};