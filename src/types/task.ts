export type TaskStatus = "done" | "overdue" | "pending"

export type TaskEvent = (task: Task) => void;

export interface Task {
  id: number;
  name: string;
  status: TaskStatus
  description?: string;
}