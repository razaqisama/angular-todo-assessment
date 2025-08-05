import {Component, Input, signal} from '@angular/core';
import { Todo, TodoPriority } from '../../../core/services/todo/todo.type';
import { TodoUpdateTaskModalFormComponent } from '../todo-update-task-modal-form/todo-update-task-modal-form.component';
import { TodoDeleteTaskModalConfirmationComponent } from '../todo-delete-task-modal-confirmation/todo-delete-task-modal-confirmation.component';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
  imports: [TodoUpdateTaskModalFormComponent, TodoDeleteTaskModalConfirmationComponent]
})
export class TodoCardComponent {
  @Input() todo: Todo = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: TodoPriority.HIGH,
    isCompleted: false,
  };

  public isOpenUpdateModal = signal(false);
  public isOpenDeleteModal = signal(false);

  public openModal(modal: 'update' | 'delete') {
    if (modal === 'update') {
      this.isOpenUpdateModal.set(true);
    } else {
      this.isOpenDeleteModal.set(true);
    }
  }

  public closeModal(modal: 'update' | 'delete') {
    if (modal === 'update') {
      this.isOpenUpdateModal.set(false);
    } else {
      this.isOpenDeleteModal.set(false);
    }
  }

  public formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  public isTodoDueDateExpired(date: string) {
    return new Date(date) < new Date();
  }
}
