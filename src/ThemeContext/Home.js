import React, { useContext } from "react";
import './Home.css';
import ThemeButton from "./ThemeButton";
import ThemeContext from "./DarkMode-CreateContext";


function Home(){
    const {darkMode}= useContext(ThemeContext);
   
    return(
    <div className="overlay">
        <h1>THEME CHANGER</h1>
        <div className={darkMode?`container-dark`:`container-light`}>
            
            
            
            <div className="container2">
            <img  className="img" src="https://cdn4.vectorstock.com/i/1000x1000/35/53/person-icon-female-user-profile-avatar-vector-18833553.jpg" alt="Contact"></img>
            <h3>Jigrisha Dixit</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="btn">
            
           <ThemeButton></ThemeButton>
            </div>
        </div>
        
    </div>
    )
}
export default Home