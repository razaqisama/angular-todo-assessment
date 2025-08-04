import {Component, inject, Input, signal} from '@angular/core';
import { Todo, TodoPriority } from '../../../core/services/todo/todo.type';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoUpdateTaskModalFormComponent } from '../todo-update-task-modal-form/todo-update-task-modal-form.component';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
  imports: [TodoUpdateTaskModalFormComponent]
})
export class TodoCardComponent {

  private todoService = inject(TodoService);

  @Input() todo: Todo = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: TodoPriority.HIGH,
  };

  public isOpenUpdateModal = signal(false);

  public removeTodo() {
    this.todoService.removeTodoById(this.todo.id); 
  }

  public openUpdateModal() {
    this.isOpenUpdateModal.set(true);
  }

  public closeModal() {
    this.isOpenUpdateModal.set(false);
  }
}
