import { useParams } from "react-router-dom";

const StudentDetails = (props) =>{
    let { id } = useParams();
    let { name , age } = props.student;

    console.log(id);
    return(
        <div className="mt-5">
            <h3 className="text-center">Name : {name}</h3>
            <h3 className="text-center">Age : {age}</h3>
        </div>
    )
}
export default StudentDetails