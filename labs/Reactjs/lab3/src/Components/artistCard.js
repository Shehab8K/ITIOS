import { NavLink } from "react-router-dom";

let ArtistCard = (props)=>{
    let {oneArtist} = props;
    // console.log(oneArtist.cover);
    // console.log(oneArtist.id);
    return(
        <NavLink style={{ textDecoration: "none" }} to={`/artist/${oneArtist.id}`}>   
            <div className="card" style={{
                width: "18rem",
                }}>
                <img src={`/covers/${oneArtist.cover}.jpg`} className="card-img-top" alt={oneArtist.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{oneArtist.name}</h5>
                    <p style={{
                        height: "100px",
                        overflow: "hidden"
                    }}>{oneArtist.bio}</p>
                    </div>
            </div>
        </NavLink>    
    )
}

export default ArtistCard;