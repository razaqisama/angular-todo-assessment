# AngularTodoAssessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development server

To start a local development server, run:

```bash
npm i
```

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

To run production build locally:

```bash
npm run serve:ssr:angular-todo-assessment
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## TIMEKEEPER
4 Aug, 11.03 - Init Project
4 Aug, 12.11 - WIP Layouting -> Going Rest
4 Aug, 13.02 - Continuing
4 Aug, 14.24 - WIP Basic Functionality CRUD -> Going Rest
4 Aug, 14.50 - Continuing
4 Aug, 15.50 - Validation on create and update task
4 Aug, 17.08 - WIP Unit Test -> Going Rest
5 Aug, 10.30 - Continuing
5 Aug, 11.01 - added complete status feature on task
5 Aug, 11.27 - Update readme / Self Assessment
5 Aug, 11.31 - added completed at status

## Self Assessment
Based on gemini, my time spent to complete this task is: 5 hours and 49 minutes, and maybe + more minutes to update this self assessment readme.

- Feature completed:
  - Basic CRUD
  - Angular SSR
  - Unit Test (Todo Board only, hehe)
  - Make the due date text red if past due
  - add complete task button to complete task, this will disabling editing the task
- Tools used:
  - Cursor AI with agents feature disabled
  - Angular v20 Official Documentation 
- Improvement Ideas:
  - Complete the unit test please :) 
  - Make the UI Visually Pleasing
  - Change the local storage state management to actual database or backend server, this will open the full potential of server side rendering feature.
  - add time picker to make the due date task more detailed
  - Crete a form handler service to handle form implementation consistency, e.g validation
  - create shared modal components to make it more modular
- Known Bugs:
  - When touch simulation enabled in browser inspection and user want to open the datepicker, datepicker open in a seconds and then immediately closed 