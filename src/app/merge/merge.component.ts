import { Component } from '@angular/core';
import { map, take} from 'rxjs/operators';
import { interval, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {

  // RxJS v6+

merge(){

    const source1 = interval(1000).pipe(map(v => 'Tech #' + (v+1)),take(3));
    const source2 = interval(1000).pipe(map(v => 'Dhaval *' + (v+1)),take(3));
    const source3 = interval(1000).pipe(map(v => 'developer $' + (v+1)),take(3));
  
    const final = merge(source1, source2, source3);
  
    final.subscribe(res => {
      console.log(res);
      
    });
  }
  
}

