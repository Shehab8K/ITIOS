const Profile = (props) =>{
    let { name , age } = props.student;
    return(
        <div className="mt-5">
            <h3 className="text-center">Name : {name}</h3>
            <h3 className="text-center">Age : {age}</h3>
        </div>
    )
}
export default Profile