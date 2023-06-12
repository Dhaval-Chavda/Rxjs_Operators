import { Component } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';


@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {

// this remove from Version 8
//Use this Map Or Optional chaining

pluck(){
const source = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'TypeScript' } },
  //will return undefined when no job is found
  { name: 'Sarah', age: 35 }
]);

//grab title property under job
const example = source.pipe(pluck('job', 'language'));
//output: "Developer" , undefined
const subscribe = example.subscribe(val => console.log(val));
}
}
