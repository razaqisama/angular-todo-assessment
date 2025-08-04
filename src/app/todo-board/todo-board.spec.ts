import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TodoBoardComponent } from './todo-board.component';

describe('TodoBoardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoBoardComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the todo board component', () => {
    const fixture = TestBed.createComponent(TodoBoardComponent);
    const todoBoard = fixture.componentInstance;
    expect(todoBoard).toBeTruthy();
  });

  it('should render the todo board component with or without tasks', () => {
    const fixture = TestBed.createComponent(TodoBoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const emptyBoard = compiled.querySelector('.todo-board-empty');

    if (emptyBoard) {
      expect(emptyBoard.textContent).toBe('No tasks found');
    } else {
      expect(fixture.componentInstance.todos().length).toBeGreaterThan(0);
    }
  });

  it('should render the new task button and open the new task modal when clicked', () => {
    const fixture = TestBed.createComponent(TodoBoardComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const todoBoard = fixture.componentInstance;
    const newTaskButton = compiled.querySelector('[data-test-id="new-task-button"]');

    expect(newTaskButton?.textContent).toBe('Add New Task');
    newTaskButton?.dispatchEvent(new Event('click'));

    expect(todoBoard.isModalOpen()).toBe(true);

    fixture.detectChanges();

    const modalShown = compiled.querySelector('[data-test-id="new-task-modal-form"]');

    expect(modalShown).toBeDefined();

    const backdrop = compiled.querySelector('[data-test-id="new-task-modal-backdrop"]');

    backdrop?.dispatchEvent(new Event('click'));

    expect(todoBoard.isModalOpen()).toBe(false);

    fixture.detectChanges();

    const modalShown2 = compiled.querySelector('[data-test-id="new-task-modal-form"]');

    expect(modalShown2).toBeNull();
  });
});
