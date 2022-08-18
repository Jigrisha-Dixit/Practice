import React from "react";
import { useState } from "react";
const WelcomePage=(props)=>{
    const [username,setUsername]=useState("")
    const [inpUser,setInpUser]=useState("")
    const handleChange=(e)=>{
        setInpUser(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUsername(inpUser)
    }
    return(
        <div>
            <h1>{username}</h1>
            <input type='text' placeholder="enter name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSubmit(e)}>SUBMIT</button>
        </div>
    )
}
export default WelcomePage
