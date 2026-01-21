import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const DATABASE_NAME = 'tasks.db';

export const taskStatuses = ['done', 'overdue', 'pending'] as const;

export const tasksTable = sqliteTable('tasks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  status: text('status', { enum: taskStatuses }).notNull(),
  description: text('description'),
  deadlineDate: integer('deadline', { mode: 'timestamp' }).notNull(),
  createdAt: text('created_at').notNull().default(sql`now()`),
  updatedAt: text('updated_at').notNull().default(sql`now()`),
});
