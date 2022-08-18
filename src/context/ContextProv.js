import { useState } from "react";
import Consumer from "./Consumer";
import LogContext from "./CreateContext";

function ContextProv(){
    
    return(
       
        <div>
            <LogContext.Provider value={{LoginValue:false}}>
                <Consumer></Consumer>
            </LogContext.Provider>
        </div>
    )
}
export default ContextProv