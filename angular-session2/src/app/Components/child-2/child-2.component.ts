import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
 @Input()name:string = ''; 
  @Input() age:number = 0;
  @Output()DecreaseAge:EventEmitter<number> = new EventEmitter<number>();

  decreaseAgeByOne(){
    this.DecreaseAge.emit(this.age - 1);
  }
}
