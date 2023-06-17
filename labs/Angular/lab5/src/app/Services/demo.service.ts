import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private readonly myClient:HttpClient) { }
 
  private readonly Base_URL = "http://localhost:3000/students";
  //Methods [All Requests]
  GetAllStudents(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewStudent(newUser:any){
    return this.myClient.post(this.Base_URL, newUser);
  }
}
