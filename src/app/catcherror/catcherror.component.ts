import { Component } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catcherror',
  templateUrl: './catcherror.component.html',
  styleUrls: ['./catcherror.component.scss']
})
export class CatcherrorComponent {

 
catcherror(){
  
const source = throwError('This is an error!');
//gracefully handle error, returning observable with error message
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
//output: 'I caught: This is an error'
const subscribe = example.subscribe(val => console.log(val));

}
}
