import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
   DataFromregister:any = [
    {name:"shehab", age: 25},
    {name:"ahmed", age: 22},
    {name:"mostafa", age: 23},
    {name:"ziad", age: 20},
    {name:"hossam", age: 35},
    {name:"mariam", age: 22},
    {name:"basma", age: 22},
    {name:"malak", age: 33},
    {name:"akram", age: 26},
    {name:"ayman", age: 23},
   ];

}
