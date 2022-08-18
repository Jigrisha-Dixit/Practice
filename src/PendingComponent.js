import React from "react";
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const {pendingTask,changeCompletion}=this.props
        return(
            <div className="todo-container">
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDniIEp8fmeZhzqNTYcyqwifqQlXGWaMUe6r7xVzRKHS8AvF_Zk4h_qcF3Lj2E9EPe8oQ&usqp=CAU" style={{width:300, borderRadius:80}}></img>
                {
                    pendingTask.map((item)=>(
                        <div className="cw">
                            <h3 className="h3">{item.taskname}</h3>
                            <h4 className="h4">{item.taskdesc}</h4>
                            <button className='bt' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default PendingComponent