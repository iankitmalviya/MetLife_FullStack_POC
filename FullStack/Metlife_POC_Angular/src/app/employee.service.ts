import { IEmployee, empClass } from './employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _url:string="http://localhost:8080/allemployee";
  constructor(private http:HttpClient) {}

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
postEmployee(empobj:empClass){
  this.http.post("http://localhost:8080/addemployee",empobj).subscribe(Response=>console.log(Response));
}
}
