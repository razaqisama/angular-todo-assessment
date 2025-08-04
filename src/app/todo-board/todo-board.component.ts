import {Component, signal} from '@angular/core';
import { TodoNewTaskModalFormComponent } from './todo-new-task-modal-form/todo-new-task-modal-form.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'todo-board',
  templateUrl: './todo-board.component.html',
  styleUrl: './todo-board.component.css',
  imports: [TodoNewTaskModalFormComponent, TodoCardComponent]
})
export class TodoBoardComponent {

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
