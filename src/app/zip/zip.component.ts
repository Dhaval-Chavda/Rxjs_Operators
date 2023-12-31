import { Component } from '@angular/core';
import { of, zip, map } from 'rxjs';


@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {


zip(){

const age = of(27, 25, 29);
const name = of('abc', 'def', 'ghi');
const isDev = of(true, true, false);

zip(age, name, isDev).pipe(map(([age, name, isDev]) => ({ age, name, isDev }))).subscribe(x => console.log(x));


}

}
