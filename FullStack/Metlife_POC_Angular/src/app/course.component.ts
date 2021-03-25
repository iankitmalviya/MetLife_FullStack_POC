import { MyDreamServiceService } from './my-dream-service.service';
import { CourseService } from './course.service';
import { Component } from '@angular/core';
@Component({
    selector:'app-courses',
    template:`<h1 style=" color:red;"> {{getName()}}</h1>
    <h2 style=" color:blue;">
    <ol>
    <li *ngFor="let myCourse of courses">  {{myCourse}}</li>
    </ol>
    </h2> 
    `
})
export class CourseComponent{
    myName='List of Courses';
    getName(){
        return this.myName;
    }
    courses;
    constructor(myService:MyDreamServiceService){
        this.courses=myService.getCourses();
    }
}