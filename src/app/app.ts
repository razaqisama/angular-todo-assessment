import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoBoardComponent } from './todo-board/todo-board.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoBoardComponent],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-todo-assessment');
}
