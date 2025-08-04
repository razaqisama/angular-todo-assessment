import { computed, inject, Injectable, signal } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { Todo, TodoFormPayload } from "./todo.type";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageService = inject(StorageService);
  private readonly STORAGE_KEY = 'todo-list';

  constructor() {
    this.initTodos();
  }

  private todos = signal<Todo[]>([]);
  
  public getTodoList = computed(() => {
    return this.todos();
  });

  private initTodos() {
    const todos = this.storageService.getItem(this.STORAGE_KEY);
    this.todos.set(todos ? JSON.parse(todos) : []);
  }

  public addTodo(todo: TodoFormPayload) {
    const newTodo = {
      ...todo,
      id: crypto.randomUUID(),
    };

    const newTodos = [...this.todos(), newTodo];

    this.todos.set(newTodos);

    this.storageService.setItem(this.STORAGE_KEY, JSON.stringify(newTodos));
  }

  public removeTodoById(id: string) {
    const todos = this.todos();
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    this.todos.set(filteredTodos);
    this.storageService.setItem(this.STORAGE_KEY, JSON.stringify(filteredTodos));
  }

  public updateTodoById(id: string, todoPayload: Todo) {
    const todos = this.todos();
    const updatedTodos = todos.map((todo: Todo) => todo.id === id ? todoPayload : todo);

    this.todos.set(updatedTodos);
    this.storageService.setItem(this.STORAGE_KEY, JSON.stringify(updatedTodos));
  }
}