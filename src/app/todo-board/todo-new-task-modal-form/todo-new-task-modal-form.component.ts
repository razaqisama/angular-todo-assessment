import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoFormPayload } from '../../../core/services/todo/todo.type';


@Component({
  selector: 'todo-new-task-modal-form',
  templateUrl: './todo-new-task-modal-form.component.html',
  styleUrl: './todo-new-task-modal-form.component.css',
  imports: [ReactiveFormsModule]
})
export class TodoNewTaskModalFormComponent {
  @Output() close = new EventEmitter<void>();
  @Input() isOpen = signal(false);

  private todoService = inject(TodoService);

  public todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    priority: new FormControl(''),
  });

  closeModal() {
    this.close.emit();
  }

  public onSubmit() {
    const todo = this.todoForm.value as TodoFormPayload;
    this.todoService.addTodo(todo);

    this.todoForm.reset();
    this.closeModal();
  }
}
