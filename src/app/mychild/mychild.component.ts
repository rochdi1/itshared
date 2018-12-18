import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';


@Component({
  selector: 'app-mychild',
  // templateUrl: './mychild.component.html',
  template: `<h1>{{ message }}</h1>`,
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent  {

  constructor() { }

 // @Input() itemchild;
  // tslint:disable-next-line:no-input-rename
 // @Input('masterchild') masterName: string;
  @Input() message: string;


}
