import { Component } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent {

  source: any;
  example: any;
  subscribe: any;
  

                                                                                  // Filter Operator //


filterData(){

 this.source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

 
 this.example = this.source.pipe(filter((res: any) => {
  return res  % 2 === 0;

}));


  return this.subscribe = this.example.subscribe((val: any) => console.log(`Even number: ${val}`));
 
}

}


