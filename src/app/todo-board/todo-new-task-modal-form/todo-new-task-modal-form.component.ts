import {Component, EventEmitter, Input, Output, signal} from '@angular/core';

@Component({
  selector: 'todo-new-task-modal-form',
  templateUrl: './todo-new-task-modal-form.component.html',
  styleUrl: './todo-new-task-modal-form.component.css'
})
export class TodoNewTaskModalFormComponent {
  @Output() close = new EventEmitter<void>();
  @Input() isOpen = signal(false);

  closeModal() {
    this.close.emit();
  }
}
