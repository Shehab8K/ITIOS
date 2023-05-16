const Students = ({students}) =>{


let  RenderStudents = (students)=>{
    console.log("from register"+students);
        
    if(students)
        {
         return(
            students.map((student, index)=>(
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
                ))
         )   
        }
    }
    return(
        <div className="container-fluid">
            <h1 className="text-center">Students</h1>
            <div className="row">
                <table className="col-6 offset-3 w-50  table table-striped text-center table-bordered">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                    <tbody>
                        { RenderStudents(students) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students;