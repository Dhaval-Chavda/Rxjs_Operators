import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {
  
  subscribe: any;

  // RxJS v6+

  //emits any number of provided values in sequence
  of(){ 
  const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
  this.subscribe = source.subscribe(val => console.log(val));
  
  // of operator is fixed set of values ADD

  // from operator is add Dynamic values add and trit like 'array'


  }
}



