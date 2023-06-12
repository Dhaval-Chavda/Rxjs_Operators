import { Component } from '@angular/core';

import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {


  pipe() {
    const numbers$ = of(1, 2, 3, 4, 5);

    numbers$.pipe(
      filter(num => num % 2 === 0),
      map(num => num * 2)
    ).subscribe(result => console.log(result));

    

  }
}
