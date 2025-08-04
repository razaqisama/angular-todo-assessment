import {Component, EventEmitter, inject, Input, OnInit, Output, signal} from '@angular/core';
import { TodoService } from '../../../core/services/todo/todo.service';


@Component({
  selector: 'todo-delete-task-modal-confirmation',
  templateUrl: './todo-delete-task-modal-confirmation.component.html',
  styleUrl: './todo-delete-task-modal-confirmation.component.css',
})
export class TodoDeleteTaskModalConfirmationComponent {
  @Output() close = new EventEmitter<void>();
  @Input() isOpen = signal(false);
  @Input() id = '';

  private todoService = inject(TodoService);

  closeModal() {
    this.close.emit();
  }

  public onConfirm() {
    this.todoService.removeTodoById(this.id);
    this.closeModal();
  }

  public onCancel() {
    this.closeModal();
  }
}
