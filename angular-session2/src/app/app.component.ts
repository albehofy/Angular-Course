import { Component } from '@angular/core';
import { Child1Component } from "./Components/child-1/child-1.component";
import { FormsModule } from '@angular/forms';
import { Child2Component } from "./Components/child-2/child-2.component";
@Component({
  selector: 'app-root',
  imports: [Child1Component, FormsModule, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name  = 'Angular';
  age = 25; 
  getAge(age:number){
    this.age = age;
  }
}
