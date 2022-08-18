import React from "react";
class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const {deletedTask,restore}=this.props
        return(
            <div className="todo-container">
                <h2>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div className="cw">
                            <h3 className="h3">{item.taskname}</h3>
                            <h4 className="h4">{item.taskdesc}</h4>
                            <button className='bt' onClick={()=>restore(item.id)}>restore</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default BinComponent