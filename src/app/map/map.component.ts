import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  subscribe:any


map(){
//emit (1,2,3,4,5)

let source = from([1,2,3,4,5,]);

let example = source.pipe(map(x => x * 20));

return this.subscribe = example.subscribe(x => console.log(x));



}
}
