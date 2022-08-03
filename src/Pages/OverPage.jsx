import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setOverPage } from "../Redux/OverPage"
import { setTask } from "../Redux/MyTask"
import { setUser } from "../Redux/AllUser"
import { axiosInstance } from "../Utilities/RequestResponse"
function SetStatus(deadline,id,status,cancelStauts,dispatch) {
    if (new Date(deadline) > Date.now()) {
        axiosInstance.post("/task/updatetask", {
            taskId: id,
            status,
            
cookie:Mycookie("token")
        })
            .then((res) => {
                cancelStauts.click()
                dispatch(setTask({type:"Updated",id,status}))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        cancelStauts.click()
        alert("Cant Update Time Out!")
    }
}
function SetRemarks(remarks,id,cancelStauts,dispatch,setremarks) {
    remarks=remarks.trim()
    if (remarks!="") {
        axiosInstance.post("/adminmangment/SetRemarks", {
            taskId: id,
            remarks,
            
cookie:Mycookie("token")
        })
            .then((res) => {
                cancelStauts.click()
                setremarks("")
                dispatch(setUser({type:"Updated",id,remarks}))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        alert("Remarks Cant be Empty!")
    }
}
function OverPage() {
    const SelectedStatus = useRef(null)
    const cancelStauts = useRef(null)
    const cancelStauts2 = useRef(null)
    const [remarks, setremarks] = useState("")
    const dispatch = useDispatch()
    const { on, user, data } = useSelector((state) => state.overpage);
    return (
        <>
            <div id="overpage" className="overpage" style={{ display: on ? "block" : "none" }}>
                <div id="setting-remarks" style={{ display: user ? "none" : "flex" }}>
                    <span><span>Title: </span>{data.title}</span>
                    <span><span>Detail: </span>{data.detail}</span>
                    <span><span>Description: </span>{data.description}</span>
                    <span><span>Priority: </span>{data.priority}</span>
                    <span><span>Date: </span>{data.deadline}</span>
                    <span><span>Status: </span>{data.status}</span>
                    <span><span>Remarks: </span>{data.remarks}</span>
                    <textarea id="set-remarks-inp" value={remarks} onChange={(e) => { setremarks(e.target.value)}}/>
                    <div id="set-cencel-button">
                        <button className="button" ref={cancelStauts2} onClick={() => { dispatch(setOverPage({ on: false, user: false, data: [] })) }}>Cancel</button>
                        <button className="button" onClick={()=>{SetRemarks(remarks,data._id,cancelStauts2.current,dispatch,setremarks)}}>Set</button>
                    </div>
                </div>
                <div id="updating-users" style={{ display: user ? "flex" : "none" }}>
                    <span>Title:</span>
                    <p>{data.title}</p>
                    {/* <input type="text" value={data.title}/> */}
                    <span>Detail: </span>
                    <p>{data.detail}</p>
                    {/* <input type="text" value={data.detail}/> */}
                    <span>Description: </span>
                    <p>{data.description}</p>
                    {/* <textarea type="text" value={data.description}/> */}
                    <span>Priority: </span>
                    <select id="priority_inp" disabled style={{ width: "50%" }} value={data.priority}>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                    <span>Date: </span>
                    <input type="deadline" disabled id="dealine_inp" style={{ width: "50%" }} value={data.deadline} />
                    <span>Remarks: </span>
                    <p>{data.remarks}</p>
                    <span value>Status: </span>
                    <select ref={SelectedStatus} id="status_inp" style={{ width: "50%" }}>
                        <option value="Uncompleted">Uncompleted</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div id="set-cencel-button">
                        <button className="button" ref={cancelStauts}onClick={() => { dispatch(setOverPage({ on: false, user: false, data: [] })) }}>Cancel</button>
                        <button className="button" onClick={()=>{SetStatus(data.deadline,data._id,SelectedStatus.current.value,cancelStauts.current,dispatch)}}>Set</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OverPage
