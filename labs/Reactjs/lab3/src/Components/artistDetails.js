import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ArtistDetail = ()=>{
    let { id } = useParams();
    let [artist, setArtist ] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3500/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            // console.log(data);
            setArtist(data);
        })
        .catch((err)=>{console.log(err)});
    },[])
    console.log(artist.albums)

    return(
        <div className="container">
            <div className="w-50 m-auto">
            <h3 className="text-center"><a style={{color: "black"}} href="/">Home</a></h3>
            <div className="card" style={{
                width: "30rem",
                marginLeft: "3em"
                }}>
                <img src={`/covers/${artist.cover}.jpg`} className="card-img-top" alt={artist.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{artist.name}</h5>
                    <p>{artist.genre}</p>
                    <p>{artist.bio}</p>
                    </div>
                </div>
                        <div className="row">
                        {
                            artist.albums?
                            artist.albums.map((album)=>{
                            return (
                                <div className="col-5 me-2">
                                <div className="card text-center" style={{
                                width: "18rem",
                                            }}>
                                    <img src={`/albums/${album.cover}.jpg`} className="card-img-top" alt={album.title}/>
                                    <div className="card-body">
                                    <h5 className="card-title">{album.title}</h5>
                                            <p>{album.year}</p>
                                            <p>{album.price}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                                })
                            :
                            <div>No Albums</div>
                        }
                        </div>
                    </div>
                </div>
    )
}

export default ArtistDetail;