import axios from "axios";
import React ,{createContext,useEffect,useState}from "react";
export const usersContext=createContext();
const UsersContextProvider = (props) => {
    // console.warn(props)
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setUsers(res.data)
        })

        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res=>res.json()).then(data=>setUsers(data))
    },[])
    
    return (
       <usersContext.Provider value={{users}}>
        {props.children}
       </usersContext.Provider>

    );
}


export default UsersContextProvider;