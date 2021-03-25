import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDreamServiceService {

  getCourses(){
    return ['course1','course2','course3','courses4'];
}
  constructor() { }
}
