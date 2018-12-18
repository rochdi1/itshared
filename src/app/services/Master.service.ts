import { Injectable } from '@angular/core';
import { ValueService } from './Value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}
