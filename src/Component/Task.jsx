import { useSelector, useDispatch } from "react-redux"
import { setOverPage } from "../Redux/OverPage"
import { axiosInstance } from "../Utilities/RequestResponse"

function Task(props){
    const dispatch = useDispatch()
    const status = props.value.status
return(
<>
<div id="one-task" onClick={(e)=>{
status=="Pending"?
dispatch(setOverPage({on:true,user:true,data:props.value})):
e.preventDefault()
}
}
    
style={{cursor:status=="Pending"?"pointer":"default", backgroundColor:status=="Pending"?"transparent":"#d3d3d31c"}}>
<h6 id="task-title" ><span className="bold">Title: </span> {props.value.title}</h6>
<h6 id="task-detail"><span className="bold">Detail: </span> {props.value.detail}</h6>
<h6 id="task-discription"><span className="bold">Description: </span> {props.value.description}</h6>
<h6 id="task-priority"><span className="bold">Priority: </span> {props.value.priority}</h6>
<h6 id="task-deadline"><span className="bold">Deadline: </span> {new Date(props.value.deadline).toString()}</h6>
<p id="task-status"><span className="bold">Status: </span> <span style={{fontWeight:"600",color:status=="Uncompleted"?"red":status=="Pending"?"black":"darkgreen"}}>{status}</span></p>
<p id="task-remarks"><span className="bold">Remarks: </span> {props.value.remarks?props.value.remarks:""}</p>
</div>

</>    
)
}
export default Task
