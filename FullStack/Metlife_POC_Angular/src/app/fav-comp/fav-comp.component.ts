import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav-comp',
  templateUrl: './fav-comp.component.html',
  styleUrls: ['./fav-comp.component.css']
})
export class FavCompComponent implements OnInit {
  @Input() isFav:boolean;
  @Output() change=new EventEmitter();
 
  textWritten;
  onClick(){
    this.isFav=!this.isFav;
    this.change.emit();
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
