import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  {path:'', component:StudentsComponent},
  {path:'students', component:StudentsComponent},
  {path:'students/:id', component:StudentDetailsComponent},
  {path:'addstudent', component:AddNewStudentComponent},
  {path:'**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
