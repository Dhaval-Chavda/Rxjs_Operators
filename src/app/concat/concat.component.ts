import { Component } from '@angular/core';
import { interval, of, concat, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {

  // RxJS v6+

concat(){

  const source1 = interval(1000).pipe(map(v => 'Tech #' + (v+1)),take(3));
  const source2 = interval(1000).pipe(map(v => 'Dhaval $' + (v+1)),take(3));
  const source3 = interval(1000).pipe(map(v => 'developer *' + (v+1)),take(3));

  const final = concat(source1, source2, source3);

  final.subscribe(res => {
    console.log(res);
    
  });
}

}