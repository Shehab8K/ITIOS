import { Component } from "react";
import Registration from "../registration/Registration";
import Students from "../students/Students";

class Main extends Component{
    constructor(){
        super();
        this.mystudents = [
            { "name":"shehab", "age":25 },        
            { "name":"hossam", "age":28 },        
            { "name":"asmaa",  "age":23 },        
            { "name":"mayar",  "age":23 },        
            { "name":"malak",  "age":30 },        
            { "name":"ziad",   "age":20 }
        ]
        this.state = {
            studentsList : this.mystudents
        }

    }
    addStudent = (student) => {
        this.mystudents.push(student);
        this.setState({studentsList: this.mystudents})
    }

    render(){
       
        return(
            <div>
                <Registration onRegister={this.addStudent}/>
                <Students students={this.state.studentsList}/>
            </div>
        )
    }
}
export default Main;