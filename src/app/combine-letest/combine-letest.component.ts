import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import * as rxjs from 'rxjs';

@Component({
  selector: 'app-combine-letest',
  templateUrl: './combine-letest.component.html',
  styleUrls: ['./combine-letest.component.scss']
})
export class CombineLetestComponent {

  
combindLetest(){


const observables = {
  a: rxjs.of(1).pipe(rxjs.delay(1000), rxjs.startWith(0)),
  b: rxjs.of(5).pipe(rxjs.delay(2000), rxjs.startWith(0)),
  c: rxjs.of(10).pipe(rxjs.delay(5000), rxjs.startWith(0))
};

const combined = combineLatest(observables);
combined.subscribe(value => console.log(value));
// Logs
// { a: 0, b: 0, c: 0 } immediately
// { a: 1, b: 0, c: 0 } after 1s
// { a: 1, b: 5, c: 0 } after 5s
// { a: 1, b: 5, c: 10 } after 10s
}
}
