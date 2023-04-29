import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ErrorComponent } from './error/error.component';

let routes:Routes = [
  {path:"", component:RegestrationComponent},
  {path:"register", component:RegestrationComponent},
  {path:"students", component:StudentsComponent},
  {path:"studentDetails/:id", component:StudentDetailsComponent},
  {path:"**", component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegestrationComponent,
    NavbarComponent,
    FooterComponent,
    StudentsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
