import axios from "axios";
import React ,{createContext,useEffect,useState}from "react";
export const tasksContext=createContext();
const tasks=[
    {
        id:1,
        title:"study react native",
        done:false
    },
    {
        id:2,
        title:"study django",
        done:false
    }
]
const TasksContextProvider = (props) => {
    
    const [AllTasks,setTasks]=useState([]);
    let [id,setId]=useState(2);
    // const url="http://192.168.1.4:3000/tasks"
    useEffect(()=>{
        setTasks(tasks)

    },[])

    let postTask=(data)=>{
        let newTasks=AllTasks
        setId(++id)
        data.id=id
        newTasks.push(data)
        setTasks(newTasks)
        
    }
    let deleteTask =(data)=>{
        let newTasks=AllTasks.filter(task=>task.id!=data.id)
        setTasks(newTasks)
    }
    const updateTask =(data)=>{
        let newTasks=AllTasks.map(task=>{
            if(task.id!=data.id)
                return task
            task.done=!data.done
            return task
        })
        setTasks(newTasks)
    }
    const values={
        AllTasks,
        postTask,
        deleteTask,
        updateTask,
    }
    return (
        <tasksContext.Provider value={values}>
            {props.children}
        </tasksContext.Provider>
    );
}


export default TasksContextProvider;