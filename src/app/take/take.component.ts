import { Component } from '@angular/core';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {

  take(){
  
  const numbers = of('apple','banana','Guava','ddsddsdsd','mango','watermelon');
  
  const limitedNumbers = numbers.pipe(take(3));
  
  limitedNumbers.subscribe(res => console.log(res));
  
  }
}
