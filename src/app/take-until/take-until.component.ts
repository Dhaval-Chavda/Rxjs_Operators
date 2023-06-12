import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent {

  // RxJS v6+

takeUntil(){

//emit value every 1s
const source = interval(1000);
//after 5 seconds, emit value
const timer2 = timer(6000);
//when timer emits after 5s, complete source
const example = source.pipe(takeUntil(timer2));
//output: 0,1,2,3

const subscribe = example.subscribe(val => console.log(val));

}

}
