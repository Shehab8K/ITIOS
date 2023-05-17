import { Component } from "react";
import ArtistCard from "./artistCard";

class Artists extends Component{
    constructor(){
        super();
        this.state = {
            AllArtists:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:3500/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({AllArtists:data});
        })
        .catch((err)=>{console.log(err)});
    }

    RenderArtists = ()=>{
        return this.state.AllArtists.map((artist)=>{
            return (
                <div className="col-4 my-4">
                    <ArtistCard oneArtist={artist} key={artist.id}/>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="container w-75">
                <h3 className="text-center"><a style={{color: "black"}} href="/">Home</a></h3>
                    <div className="row">
                            {this.RenderArtists()}
  
                    </div>
                </div>
        )
    }

}

export default Artists;