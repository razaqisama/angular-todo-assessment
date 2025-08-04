import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoFormPayload, TodoPriority } from '../../../core/services/todo/todo.type';


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
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    priority: new FormControl(TodoPriority.LOW, [Validators.required]),
  });

  closeModal() {
    this.close.emit();
  }

  public onSubmit() {
    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const todo = this.todoForm.value as TodoFormPayload;
    this.todoService.addTodo(todo);

    this.todoForm.reset();
    this.closeModal();
  }
}
