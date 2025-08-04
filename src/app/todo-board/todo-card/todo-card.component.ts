import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export class TodoCardComponent {
  @Input() title = signal('Todo 1');
  @Input() description = signal('Description 1');
  @Input() dueDate = signal<Date | null>(new Date());
  @Input() priority = signal('High');
}
