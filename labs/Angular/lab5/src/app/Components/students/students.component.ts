import { Component ,OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  Students:any;
  constructor(public myService:DemoService){

  }
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe(
      {
        next:(data)=>{
          //console.log(data)
          this.Students = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
}
