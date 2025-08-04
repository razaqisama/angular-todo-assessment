import {Component, inject, signal} from '@angular/core';
import { TodoNewTaskModalFormComponent } from './todo-new-task-modal-form/todo-new-task-modal-form.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo/todo.service';

@Component({
  selector: 'todo-board',
  templateUrl: './todo-board.component.html',
  styleUrl: './todo-board.component.css',
  imports: [TodoNewTaskModalFormComponent, TodoCardComponent]
})
export class TodoBoardComponent {
  private todoService = inject(TodoService);

  isModalOpen = signal(false);

  public todos = this.todoService.getTodoList;
  
  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
