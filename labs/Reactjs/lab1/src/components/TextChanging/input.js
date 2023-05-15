import { Component } from "react";
import "./input.css";

class MyInput extends Component{
    getData = (e)=>{
            this.setState({name:e.target.value})        
    }

    reset = () => {
        this.setState({name: ""})
    }

    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    render(){
        return(
              <div class="container">
                    <input placeholder="Name" id="myInput" type="text" value={this.state.name} onChange={this.getData}/>
                    <p>{this.state.name}</p>
                    <button class="btn btn-dark reset" onClick={this.reset}>Reset</button>
             </div>
        )
    }
}

export default MyInput;
