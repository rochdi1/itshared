import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  test1: string;
  title = 'Angular6';
  url = 'https://picsum.photos/200/300/?random';
  myName: String = 'Aman';
  constructor() {
    console.log( 'test1.value' );
  }


  updateName(input: String) {
      this.myName = input;
  }

}
