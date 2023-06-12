import { Component } from '@angular/core';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {


first(){

const source = from([1, 2, 3, 4, 5]);
//emit first item to pass test
const example = source.pipe(first(num => num === 3));
//output: "First to pass test: 5"
const subscribe = example.subscribe(val =>
  console.log(`First Number: ${val}`)
);

}

}
