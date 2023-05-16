import { Component } from "react";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: null
        }
    }
    getName = (e) => {
        this.setState({ name: e.target.value });
    }
    getAge = (e) => {
        this.setState({ age: e.target.value });
    }
    register = (e) => {
        this.setState({ name: this.state.name });
        this.setState({ age: this.state.age });
        this.props.onRegister({"name": this.state.name, "age": this.state.age })
    }
    render() {
        return (
            <div className="container" id="makeMaxWidth">
            <h1 className="text-center mt-4"> Register</h1>
            <form  className="row mt-2 offset-3">
                <div className="col-8">
                    <input type="text"  className="form-control" placeholder="Name" onChange={this.getName} required/>
                    <input type="number"  className="form-control mt-3" placeholder="Age" onChange={this.getAge} required/>
                </div>
                    <button onClick={this.register} className="btn btn-dark mt-3 col-2 offset-3">ADD</button>
            </form>
            <hr className="my-4"/>
        </div>
        )
    }
}
export default Registration;