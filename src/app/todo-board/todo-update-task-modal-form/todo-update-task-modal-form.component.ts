import {Component, EventEmitter, inject, Input, OnInit, Output, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';
import { Todo, TodoPriority } from '../../../core/services/todo/todo.type';


@Component({
  selector: 'todo-update-task-modal-form',
  templateUrl: './todo-update-task-modal-form.component.html',
  styleUrl: './todo-update-task-modal-form.component.css',
  imports: [ReactiveFormsModule]
})
export class TodoUpdateTaskModalFormComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() isOpen = signal(false);

  @Input() defaultValues: Todo = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: TodoPriority.HIGH,
  };

  private todoService = inject(TodoService);

  public todoForm = new FormGroup({
    id: new FormControl(this.defaultValues.id),
    title: new FormControl(this.defaultValues.title),
    description: new FormControl(this.defaultValues.description),
    dueDate: new FormControl(this.defaultValues.dueDate),
    priority: new FormControl(this.defaultValues.priority),
  });

  ngOnInit(): void {
    this.todoForm.patchValue(this.defaultValues);
  }

  closeModal() {
    this.close.emit();
  }

  public onSubmit() {
    const todo = this.todoForm.value as Todo;
    this.todoService.updateTodoById(todo.id, todo);

    this.closeModal();
  }
}
