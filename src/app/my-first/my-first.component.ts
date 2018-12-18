import { Component } from '@angular/core';
import { ItshareApiService } from '../services/itshare-api.service';


@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent  {

  coursesdataa: ItshareApiService = new ItshareApiService();

  courses;
  constructor(coursesdata: ItshareApiService) {
    this.courses = coursesdata.getCourses();
  }
 // courses: string[] = ['php', 'ajax', 'nodejs', 'css', 'html'];
// coursesdata: ItshareApiService = new ItshareApiService();


// courses: string[] = coursesdata->getAll();



}
