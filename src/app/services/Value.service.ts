import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

constructor() { }
getValue() {
  return 'real value';
}

getObservableValue() {
  return 'observable value';
}

getPromiseValue() {
  return 'promise value';
}

}
