import React, { useContext } from "react";
import './ThemeButton.css'
import ThemeContext from "./DarkMode-CreateContext";

function ThemeButton(){
    const {darkMode, toggleDarkMode}=useContext(ThemeContext);
    {console.log(darkMode)}
    const handleClick=()=>{
        toggleDarkMode();
    }
    return(
        <div>
        <label className="toggle-switch">
      <input type="checkbox" checked={darkMode} onChange={handleClick} />
      <span className="switch" />
    </label>
        </div>
    )
}
export default ThemeButton