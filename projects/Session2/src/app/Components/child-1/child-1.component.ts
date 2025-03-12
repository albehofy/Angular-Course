import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {
  @Input()name:string = ''
  @Output()increaseAge:EventEmitter<number> = new EventEmitter<number>();
  @Input() age:number = 0;
  
  increaseAgeByOne(){
    this.increaseAge.emit(this.age + 1);
  }
}
