import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  post={
    status:false
  }
  onFavChnage(){
    console.log("hey bro fav had changed");
  }
email="ankit@gmail.com";
onKeyUp(){
  console.log(this.email);
}
  constructor() { }

  ngOnInit(): void {
  }

}
