import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  dataStream: Observable<string>;

 createDataStream() {
 this.dataStream = new Observable(
  observer => {
    setTimeout(() => { observer.next('value1'); }, 1000);
     setTimeout(() => { observer.next('value2'); }, 3000);
     setTimeout(() => { observer.next('value3'); }, 5000);
     setTimeout(() => { observer.complete(); }, 6000);
   }
 );

  return this.dataStream;

 }


}
