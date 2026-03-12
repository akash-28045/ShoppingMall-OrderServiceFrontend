#Project Overview

This project is the frontend interface of an Order Management System developed using Angular. The application provides a user-friendly platform for managing orders through a modern web interface. It allows users to perform essential operations such as creating, viewing, updating, and deleting orders, while communicating with a backend API built using Spring Boot. The system is designed to simplify order handling by providing an interactive UI, efficient data binding, and real-time updates without needing to refresh the page.

#Frontend Description

The frontend is built using Angular standalone components and follows a component-based architecture. The main OrderComponent manages the order data and interacts with a dedicated OrderService to communicate with backend APIs using HttpClient. The UI includes a modal-based order form for creating and updating orders, and a card-based layout to display order details. Angular directives like *ngFor and *ngIf are used to dynamically render order data and handle conditional display states. Two-way data binding with ngModel enables real-time synchronization between user input and the application model.

#Tools and Technologies Used

Frontend Framework: Angular
Programming Language: TypeScript
UI Structure: HTML5
Styling: CSS3
API Communication: Angular HttpClient
Forms Handling: FormsModule and NgForm
Package Manager: Node.js / npm
Development Environment: VS Code
Version Control: Git & GitHub

#Features

Create new orders through a form interface
View orders displayed dynamically in a card layout
Edit existing orders using a modal form
Delete orders with confirmation prompt
Two-way data binding using ngModel
Dynamic rendering using *ngFor
Conditional display using *ngIf
Light and dark theme toggle
REST API integration with backend
Optimized rendering using trackBy

#Challenges Faced

Handling asynchronous API calls while updating the UI
Ensuring form validation before submission
Synchronizing UI updates after delete and update operations
Fixing module import and service integration issues
Debugging Angular compilation and dependency errors

#Improvements Implemented

Implemented real-time UI updates after CRUD operations
Added modal-based form for better user interaction
Optimized list rendering using trackBy
Improved user experience with a dark/light theme toggle
Structured code with separation of component and service logic
Enhanced error handling for API calls


# Order

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
