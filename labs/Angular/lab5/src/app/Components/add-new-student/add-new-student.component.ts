import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService:DemoService){  }

  Add(name:any,age:any, email:any, phone:any,nationality:any){
    let newStudent = {name, age, email, phone,nationality};
    this.myService.AddNewStudent(newStudent).subscribe();
    // window.location.href="../students/students.component.html";

  }
}
