
let Main = ()=>{
return(
    <div style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
         }}>
         <div style={{
            margin: 'calc(100%/20) auto',
         }}>
         <h5 style={{
                width: '20em',
                height: '20em',
                textAlign: 'center',
                backgroundImage: 'url(cover.png)',
                backgroundSize: 'cover',
            }}><a style={{
                display:'inline-block',
                fontSize: '2em',
                marginTop: '4em',
                color: 'white'
            }} href="/artists">Music DB</a></h5>
         </div>

    </div>
)

}

export default Main;