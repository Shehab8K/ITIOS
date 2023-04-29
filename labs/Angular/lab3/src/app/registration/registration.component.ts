import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username = "";
  userAge = "";

  @Output() myEvent = new EventEmitter();

  add(){
    console.log("working");
    let user = {
      name: this.username,
      age: this.userAge
    }

    if(this.username.length>=3 && ((+this.userAge > 20 && +this.userAge < 40)))
    {
      this.myEvent.emit(user);
    }

  }
}
