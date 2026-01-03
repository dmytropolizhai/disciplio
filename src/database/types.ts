import { tasksTable, taskStatuses } from '@/database/schema';

export type TaskStatus = (typeof taskStatuses)[number];
export type TaskEvent = (task: Task) => void;
export type Task = typeof tasksTable.$inferSelect;
export type NewTask = typeof tasksTable.$inferInsert;