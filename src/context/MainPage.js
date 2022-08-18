import React from "react";
import { useContext } from "react";
import LogContext from "./CreateContext";
const Main=()=>{
    const AuthStatus=useContext(LogContext)
    return(
        <div>
            {
                AuthStatus.LoginStatus?<h1>Welcome to Main Page</h1>:<h1>Please Login to Continue</h1>
            }
        </div>
    )
}
export default Main