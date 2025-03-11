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
    if(age > 0 && age <= 100){
      this.age = age;
    }else if(age < 1){
      alert("Age can't be negative");
    }else if(age > 100){
      alert("Age can't be greater than 100");
    }
  }
}
