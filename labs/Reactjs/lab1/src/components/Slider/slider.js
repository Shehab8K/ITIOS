import { Component } from "react";
import "./slider.css";

class Slider extends Component{
    looper = null;
    constructor(){
        super();
        this.state = {
            prev: 1,
            num:  2,
            next: 3,
            start: this.looper,
        }
    }

    left =() =>{
        if(this.state.prev > 1)
        {
            this.setState({
                prev: this.state.prev-1,
                num: this.state.num-1,
                next: this.state.next-1,
            })
        }
      }

      
    right = () => {
        if(this.state.next < 6)
        {
            this.setState({
                prev: this.state.prev+1,
                num: this.state.num+1,
                next: this.state.next+1,
            })
        }
    }

    loopImg = () => {

        this.looper = setInterval(()=>{
            this.setState({
                prev: this.state.prev+1,
                num: this.state.num+1,
                next: this.state.next+1,
            })
    
          switch(true)
          {
            case this.state.next === 6:
                this.setState({next: 1})
            break;
    
            case this.state.num === 6:
                this.setState({num: 1})
            break;
    
            case this.state.prev === 6:
                this.setState({prev: 1})
            break;

            default:
            break;
          }
        },500);

        this.setState({
            start: this.looper
        })
      }

    clearImg = () =>{
        clearInterval(this.looper);
        // this.setState({: 1})
      }
    
      
    render(){
        return(
        <div className="container-fluid">
            <div className="row">
                <div className="wrapper offset-1">
                    <i onClick={this.left} className="fa-solid fa-angle-left fa-lg"></i>
                    <div className="carousel">
                        {/* <p>{this.state.prev}</p>
                        <p>{this.state.num}</p>
                        <p>{this.state.next}</p> */}
                        <img src= {"images/img-" +this.state.prev+".png"} alt={"img"+this.state.prev} />
                        <img src={"images/img-" +this.state.num+".png"} alt={"img"+this.state.num} />
                        <img src={"images/img-" +this.state.next+".png"} alt={"img"+this.state.next} />
                    </div>
                    <i onClick={this.right} className="fa-solid fa-angle-right fa-lg"></i>

                </div>
            </div>

            <div className="row">
                <div className="col-4 offset-4 row">
                    <button onClick={this.loopImg} className="btn btn-light offset-1 col-5 mt-3 me-2">Start</button>
                    <button onClick={this.clearImg} className="btn btn-light col-5 mt-3">Stop</button>
                </div>
            </div>
        </div>
      )
    }
}

export default Slider;
