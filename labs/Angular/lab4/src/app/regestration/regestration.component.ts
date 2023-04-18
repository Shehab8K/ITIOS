import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {
  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20),Validators.max(40),Validators.required]),
    email: new FormControl(null, [Validators.email,Validators.required])
  });

  Add() {
    if(this.validationForm.valid){
      alert("User Added Succesfully");
    }else{
      console.log(this.validationForm)
      switch(true)
      {
        case (!this.validationForm.controls["name"].valid):
          alert("Name must be more than 3 letters");
        break;

        case (!this.validationForm.controls["age"].valid):
          alert("Age must be between 20 to 40");
        break;

        case (!this.validationForm.controls["email"].valid):
          alert("Invalid Email format");
        break;
      }
    }
  }

}
