import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    HeaderComponent,
    ErrorComponent,
    AddNewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
