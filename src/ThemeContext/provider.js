import React, { useState } from "react";
import ThemeContext from "./DarkMode-CreateContext";
function Provider(props){
    const [darkMode,setDarkMode]=useState(false);
    const toggleDarkMode =()=>{
        setDarkMode(!darkMode);
    };
    return(
        <div>
            <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
export default Provider