# Introduction to Angular

## 🔹 What is Angular?

Angular is a **TypeScript-based front-end framework** developed by Google for building **single-page applications (SPAs)**. It follows the **component-based architecture** and provides powerful tools for **dependency injection, routing, forms, and state management**.

### ✅ Why Use Angular?
- **Component-Based Architecture:** Reusable UI components improve maintainability.
- **Two-Way Data Binding:** Synchronizes the model and the view effortlessly.
- **Dependency Injection (DI):** Manages services efficiently.
- **Routing and Navigation:** Enables smooth navigation within SPAs.
- **Modular Development:** Features like lazy loading improve performance.

### 🔹 Declarative vs. Imperative Programming

Angular follows a **declarative approach**, meaning we define the desired outcome and Angular handles execution.

#### Example:
**Imperative JavaScript (Manually Iterating)**
```js
let numbers = [1, 2, 3];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled);
```

**Declarative Angular (Using *ngFor)**
```html
<div *ngFor="let num of numbers">{{ num * 2 }}</div>
```

## 🎯 Setting Up an Angular Project

### 1️⃣ Install Node.js & Angular CLI
Ensure you have **Node.js** installed:
```sh
node -v # Check Node.js version
```
Then install Angular CLI:
```sh
npm install -g @angular/cli
```

### 2️⃣ Create a New Angular Project
```sh
ng new my-angular-app
```
Choose the necessary configurations (like routing and CSS framework).

### 3️⃣ Navigate to the Project Directory
```sh
cd my-angular-app
```

### 4️⃣ Serve the Application
```sh
ng serve
```
Now, visit `http://localhost:4200/` in your browser.

---

## 🔥 Angular Project Structure Explained
```
my-angular-app/
│── src/
│   ├── app/            # Main application folder
│   │   ├── components/ # Custom components
│   │   ├── services/   # Services for API calls
│   │   ├── app.module.ts  # Main module
│   │   ├── app.component.ts  # Root component
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── environments/   # Environment configurations
│   ├── index.html      # Main HTML file
│   ├── main.ts         # Application entry point
│── angular.json        # Angular project settings
│── package.json        # Dependencies and scripts
```

## 🔹 What is a Component in Angular?

A **component** is the fundamental building block of an Angular application. It controls a section of the UI and consists of:
1. **Template (HTML):** Defines the structure of the view.
2. **Class (TypeScript):** Contains logic and data.
3. **Styles (CSS/SCSS):** Defines the appearance.

### 🔹 Creating a Component
Use the Angular CLI:
```sh
ng generate component my-component
```
This generates:
```
my-component/
├── my-component.component.ts
├── my-component.component.html
├── my-component.component.css
├── my-component.component.spec.ts
```

### 🔹 Example of a Simple Component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, {{ name }}!</h1>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name = 'Angular';
}
```

---

## 🔹 Understanding `main.ts`
The `main.ts` file is the entry point of an Angular application. It bootstraps the root module (`AppModule`).
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

---

## 🔹 What is Dependency Injection in Angular?

Dependency Injection (DI) is a design pattern where Angular **injects services** into components instead of creating them manually.

### 🔹 Example of DI in Angular
```typescript
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class DataService {
  getData() { return 'Injected Data!'; }
}
```
```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({ selector: 'app-example', template: '{{ data }}' })
export class ExampleComponent {
  data: string;
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
```

---

## 🎯 Interview Questions & Answers

### 🔹 **Basic Questions**
1️⃣ **What is Angular?**
- A front-end framework for building **single-page applications** using TypeScript.

2️⃣ **What is a Component in Angular?**
- A reusable UI building block that consists of a template, styles, and logic.

3️⃣ **What is Dependency Injection in Angular?**
- DI is a design pattern where Angular automatically provides instances of services.

4️⃣ **What is Bootstrapping in Angular?**
- The process of loading the root module and rendering `AppComponent`.

5️⃣ **How does Angular improve maintainability?**
- **Component-based architecture** breaks applications into reusable, manageable parts.
- **Modular structure** ensures organized development and lazy loading.
- **TypeScript** provides static typing, reducing runtime errors.

---

## 🔥 Vite vs. Webpack in Angular

| Feature | Vite | Webpack |
|---------|------|---------|
| **Compilation Speed** | Uses **ESBuild**, much faster | Slower due to complex build process |
| **Hot Module Replacement (HMR)** | Instant updates | Slower updates |
| **Configuration** | Minimal setup | Requires extensive configuration |
| **Build Speed** | Faster due to optimized bundling | Slower |
| **Code Splitting** | Built-in automatic splitting | Manual configuration required |
| **Production Optimization** | Uses ESBuild, smaller bundles | Uses Terser, slower |
| **Angular Support** | Supported in recent versions | Traditional bundler |

### **Which One to Use?**
- **Use Vite if:** You want **faster development speed**, better DX, and modern performance optimizations.
- **Use Webpack if:** You have a legacy Angular project that already depends on Webpack configurations.

🚀 **Happy Coding!** 🎯
