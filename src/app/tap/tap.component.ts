import { Component } from '@angular/core';
import { tap, of, map, } from 'rxjs';


@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {


  tap() {
    const obs = of(1, 2, 3);

    obs
      .pipe(
        tap((val) => {
          console.log(`Value add: ${val}`);
        })
      )
      .subscribe((val) => {
        console.log(`Value received: ${val}`);
      });

  }
}
