import { EmployeeService } from './../employee.service';
import { IEmployee, empClass } from './../employee';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isDivVisible=false;
  emp:empClass;
  onClick(data){
    this.emp=new empClass(data.id,data.ename,data.ecity);
    this._employeeService.postEmployee(this.emp);
    this.isDivVisible=true;
  }

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    
    
  }

}
