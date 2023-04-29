import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData:any;
  users:{}[] = [];
  title = 'lab3';

  getData(data:any)
  {

    this.userData = {name:data.name,age:data.age};
    this.users.push(this.userData);
    console.log(this.users);
  }
}
