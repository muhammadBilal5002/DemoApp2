import { useNavigate } from "react-router-dom"
function Admin(props){
    const navigate = useNavigate()
    return(
    <>
    <div id="one-user-info" onClick={()=>{navigate(`/taskdetail/${props.value._id}`, { replace: true })}}>
        <span id="user-id">Id: {props.value._id}</span>
        <span><strong className="bold" >Name:</strong> {props.value.name}</span>
        <span><strong className="bold">No of Task:</strong> {props.value.task.length}</span>
        {/* <span>No of Remarks: 0</span>
        <span>Pending: 0</span>
        <span>UnComplete: 0</span>
        <span>Complete: 0</span> */}
    </div>

</>)
    }
    export default Admin