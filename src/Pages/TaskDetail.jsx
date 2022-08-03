import SingleTaskDetail from "../Component/SingleTaskDetail"
import { setUser } from "../Redux/AllUser"
import { useSelector, useDispatch } from "react-redux"
import { Mycookie } from "../Utilities/Cookies"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function TaskDetail(props){
    let { id } = useParams();
    const [isok, setisok] = useState(false);
    const dispatch = useDispatch()
    const allusers = useSelector(state => state.allusers)
    useEffect(() => {
        dispatch(setUser({type:"Current",id}))
            setisok(true)
    }, []);
    return(
    <>
    <br/>
    <hr style={{color:"black",width:"90%",margin:"auto"}}/>
    <h1 id="user-id-detail">User ID: {isok?allusers.current[0]._id:"...."}</h1>
    <hr style={{color:"black",width:"90%",margin:"auto"}}/>
    <div id="single-user-task-detail">
    
    {
        isok?
        allusers.current[0].task.map(task => <SingleTaskDetail key={task._id} value={task}/>)
        :"...."
    }
    </div>
    </>
)
}
export default TaskDetail
