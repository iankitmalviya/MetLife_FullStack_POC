import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { MyDreamServiceService } from './my-dream-service.service';
import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FavCompComponent } from './fav-comp/fav-comp.component';
import { PostComponent } from './post/post.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SwitchConceptComponent } from './switch-concept/switch-concept.component';

@NgModule({
  declarations: [
    AppComponent,
CourseComponent,
MyCompComponent,
FavCompComponent,
PostComponent,
EmployeeListComponent,
SwitchConceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,

  ],
  providers: [CourseService,MyDreamServiceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
