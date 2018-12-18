import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItshareApiService {

  constructor() { }

 getCourses() {
    return ['php', 'ajax', 'nodejs', 'css', 'html'];
  }
}
