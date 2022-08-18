import LogContext from "./CreateContext";
import { useContext } from "react";
import { useState } from "react";
import Main from "./MainPage";
import ContextProv from "./ContextProv";
const Consumer=()=>{
    const {value}=useContext(LogContext)
    const [username,setUsername]=useState('')
    const [LoginStatus,setLoginStatus]=useState({value})
    const [Password,setPassword]=useState('')
    const handleChange=(e,key)=>{
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=()=>{
        if(username==='jigrisha.dixit'&&Password==='Rudra@03'){
            setLoginStatus(true)
        }
        else{
            setLoginStatus(false)
            alert('WRONG USERNAME OR PASSWORD')
        }
}
    return(
        <div>
            
        Username<input type='text' onChange={(e)=>handleChange(e,"username")}></input>
        Password<input type='password' onChange={(e)=>handleChange(e,"password")}></input>
        <button onClick={handleLogin}>login</button>
        <Main></Main>
        </div>
    )
}
export default Consumer