import React from "react";
import "./CompletedComponent.css";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const {completedTask,changeCompletion,deleteTask}=this.props
        return(
           
                
            <div className="todo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9AK5zTpQkD3EULVWGDFQTRcEUc3Lli0_Aw&usqp=CAU" style={{width:300}}></img>
                {
                    completedTask.map((item)=>(
                        <div className="cw">
                            <h3 className="h3">{item.taskname}</h3>
                            <h4 className="h4">{item.taskdesc}</h4>
                            <button className='bt'onClick={()=>deleteTask(item.id)}>move to trash</button>
                            <button  className='bt' onClick={()=>changeCompletion(item.id)}>mark incomplete</button>
                        </div>
                    ))
                }
            </div>
           
        )
    }
}
export default CompletedComponent