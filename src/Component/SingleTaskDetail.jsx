import { setOverPage } from "../Redux/OverPage"
import { useSelector, useDispatch } from "react-redux"
function SingleTaskDetail(props){
    const dispatch = useDispatch()
return(
    <>
    <div id="single-task-detail" onClick={(e)=>{dispatch(setOverPage({on:true,user:false,data:props.value}))}
}>
        <span id="one-task-title"><span className="bold">Title: </span>{props.value.title}</span>
        <span id="one-task-detail"><span className="bold">Detail: </span>{props.value.detail}</span>
        <span id="one-task-description"><span className="bold">Description: </span>{props.value.description}</span>
        <span id="one-task-priority"><span className="bold">Priority: </span>{props.value.priority}</span>
        <span id="one-task-status"><span className="bold">Status: </span>{props.value.status}</span>
        <span id="one-task-date"><span className="bold">Date: </span>{new Date(props.value.deadline).toString()}</span>
        <span id="one-task-remarks"><span className="bold">Remarks: </span>{props.value.remarks}</span>
    </div>
    </>
)
}
export default SingleTaskDetail
