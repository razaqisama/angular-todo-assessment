export enum TodoPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TodoPriority;
  isCompleted: boolean;
  completedAt?: string;
}

export interface TodoFormPayload {
  title: string;
  description: string;
  dueDate: string;
  priority: TodoPriority;
}