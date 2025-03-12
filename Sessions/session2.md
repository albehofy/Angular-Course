# Angular View Encapsulation & Shadow DOM

## 🔹 What is ViewEncapsulation in Angular?

In Angular, **ViewEncapsulation** controls how styles from a component affect the DOM and other components. It ensures that styles do not leak unintentionally and maintains modularity in large-scale applications.

### 🔥 Types of ViewEncapsulation

Angular provides three types of **ViewEncapsulation**:

### 1️⃣ **Emulated (Default)**
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default value
})
export class ExampleComponent {}
```
🔹 **How it works?**
- Angular **modifies CSS selectors** by adding a unique attribute to ensure styles are scoped to the component.
- Example:
  ```html
  <p _ngcontent-xyz="">This is inside Emulated Encapsulation</p>
  ```

✅ **Pros:**
- Prevents styles from affecting other components.
- Compatible with all browsers.

❌ **Cons:**
- Not a real Shadow DOM, only a simulation.

---

### 2️⃣ **ShadowDom (Uses Real Shadow DOM)**
```typescript
@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {}
```
🔹 **How it works?**
- Uses the **actual Shadow DOM API**.
- The component gets encapsulated inside `<shadow-root>`:
  ```html
  <app-shadow>
    <shadow-root>
      <p>This is inside Shadow DOM</p>
    </shadow-root>
  </app-shadow>
  ```
✅ **Pros:**
- Fully isolated styles (No conflicts).
- Ideal for creating **Web Components**.

❌ **Cons:**
- Hard to override styles from outside.
- Limited browser support in older versions.

---

### 3️⃣ **None (No Encapsulation)**
```typescript
@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {}
```
🔹 **How it works?**
- Styles are applied globally to all components.
- Example:
  ```css
  p { color: green; font-weight: bold; }
  ```
✅ **Pros:**
- Easy to apply global styles.

❌ **Cons:**
- Causes **style conflicts** between components.

---

## 🟢 **What is Shadow DOM?**
Shadow DOM is a **browser API** that allows developers to **encapsulate HTML and CSS** inside a component. It is used in Angular when `ViewEncapsulation.ShadowDom` is enabled.

### 🔹 Example using JavaScript (Without Angular)
```html
<div id="host"></div>

<script>
  let hostElement = document.getElementById('host');
  let shadowRoot = hostElement.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = `<style> p { color: red; } </style>
                          <p>This is inside Shadow DOM</p>`;
</script>
```
✅ **Key Features of Shadow DOM:**
- Isolates styles and structure.
- Prevents CSS conflicts.
- Useful for **Web Components**.

---

## 🎯 **Angular Inputs & Outputs**
Angular components communicate using **@Input()** and **@Output()** decorators.

### 🔹 **@Input() - Passing Data to a Child Component**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Received: {{ data }}</p>`
})
export class ChildComponent {
  @Input() data!: string;
}
```

```typescript
@Component({
  selector: 'app-parent',
  template: `<app-child [data]="message"></app-child>`
})
export class ParentComponent {
  message = "Hello from Parent!";
}
```
✅ **Use Case:** Pass data from parent to child.

---

### 🔹 **@Output() - Emitting Events to Parent**
```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage() {
    this.messageEvent.emit("Hello Parent!");
  }
}
```

```typescript
@Component({
  selector: 'app-parent',
  template: `<app-child (messageEvent)="receiveMessage($event)"></app-child>
             <p>Message: {{ receivedMessage }}</p>`
})
export class ParentComponent {
  receivedMessage = '';
  
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
```
✅ **Use Case:** Emit events from child to parent.

---

## 🎯 **Interview Questions & Answers**

### 🔹 **Basic Questions**
1. **What is ViewEncapsulation in Angular?**
   - ViewEncapsulation in Angular determines how styles are applied and isolated within components.

2. **What are the different types of ViewEncapsulation in Angular?**
   - `Emulated`, `ShadowDom`, and `None`.

3. **How does `ViewEncapsulation.Emulated` work?**
   - It simulates encapsulation by modifying CSS selectors with unique attributes.

4. **What is the difference between `ViewEncapsulation.ShadowDom` and `ViewEncapsulation.None`?**
   - `ShadowDom` uses the actual Shadow DOM API to isolate styles, while `None` applies styles globally.

5. **What is Shadow DOM, and why is it useful?**
   - Shadow DOM encapsulates styles and structure to prevent CSS conflicts.

### 🔹 **Advanced Questions**
6. **Can we modify styles inside `Shadow DOM` from outside?**
   - No, styles inside `Shadow DOM` are isolated unless explicitly exposed using CSS variables.

7. **What are the advantages and disadvantages of `ViewEncapsulation.ShadowDom`?**
   - ✅ Pros: True encapsulation, avoids style conflicts.
   - ❌ Cons: Harder to override styles, limited browser support.

8. **How does Angular handle styles internally when using `ViewEncapsulation.Emulated`?**
   - It adds unique attributes (`_ngcontent-xyz`) to style elements specifically.

9. **What are `@Input()` and `@Output()` decorators used for in Angular?**
   - `@Input()` passes data from parent to child, `@Output()` emits events from child to parent.

10. **How does Angular handle event communication between components?**
   - Through `@Output()` and `EventEmitter` to send data from child to parent.

---

## 🎬 **Conclusion**
- `ViewEncapsulation` controls style isolation in Angular.
- `Shadow DOM` provides full encapsulation but with limitations.
- `@Input()` and `@Output()` allow data sharing between components.
- Understanding these concepts is crucial for **interview preparation** and **real-world applications**.

🚀 **Happy Coding!** 🎯

