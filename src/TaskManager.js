import React from "react"
import BinComponent from "./BinComponent"
import CompletedComponent from "./CompletedComponent"
import PendingComponent from "./PendingComponent"
import "./TaskManager.css";
import {Link} from "react-router-dom";
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }
    getCompletedItems=()=>{
       const result= this.state.tasks.filter((item)=>item.completion===true&&item.deletion===false)
       return result
    }
    getPendingItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===false&&item.deletion===false)
        return result
     }
     changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp}) 
     }
     changeDeletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
     }
   /*  deleteTask=(itemid)=>{
        const result=this.state.tasks.filter((item)=>item.id!==itemid)
        this.setState({tasks:result})
     }*/
     getDeletedTask=()=>{
        const result= this.state.tasks.filter((item)=>item.deletion===true)
        return result
     }
     getRestoreTask=(itemid)=>{
        const temp=[...this.state.tasks]
       const obj=temp.find((item)=>itemid===item.id)
      obj.deletion=!obj.deletion
      this.setState({tasks:temp})
    }
    render(){
        return(
            <div>
               <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
                <div className="container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMFrT0tlUFyZVY7GRVx8N-rwN6uX9fMy5mg7XIC4R0Rrfd7UK3Feb5mEBcpUh65OZz8M&usqp=CAU" style={{width:80,borderRadius:4}}></img>
               <h1>Hello There.......How Are You??</h1></div>
               <div className="card">
               <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvDMd7XE_PRs9-fKjBTU3IwWnQqcK1lUunA&usqp=CAU" style={{width:300,marginRight:0}}></img>
                <PendingComponent pendingTask={this.getPendingItems()} changeCompletion={this.changeCompletionStatus}></PendingComponent></div>
                <div className="card2">
                <CompletedComponent completedTask={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus}></CompletedComponent>
                <img src="https://smallbusinessify.com/wp-content/uploads/2019/10/How-to-make-a-productive-to-do-list-1024x751.jpg" style={{width:400, marginLeft:1}}></img></div>
                <div className="card3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI6c7GH3PLKc0h0FNPupXeEpsF49ljTPrDw&usqp=CAU" style={{width:300,marginLeft:1}}></img>
                <BinComponent deletedTask={this.getDeletedTask()} restore={this.getRestoreTask}></BinComponent></div>
            </div>
            
        )
    }
}
export default TaskManager