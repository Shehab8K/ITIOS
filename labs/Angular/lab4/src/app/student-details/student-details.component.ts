import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
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

   id:any= "";
   name:string = "";
   age:any = "";
   constructor(private route: ActivatedRoute) { }

   ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.DataFromregister[this.id].name;
    this.age = this.DataFromregister[this.id].age;
  }


}
