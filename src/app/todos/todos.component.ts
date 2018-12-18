import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/Todos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(protected MyStream: TodosService) { }

   ngOnInit() {
   }
   LoadData() {
    this.MyStream.createDataStream().subscribe(
      next => {
        console.log(next); },
      error => { console.log(error); },
      () => { console.log('Es ist fertig'); }
    );
   }

}











