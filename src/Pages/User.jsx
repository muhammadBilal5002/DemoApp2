import { useRef, useState, useEffect, useCallback } from "react"
import Navigation from "../Component/Navigation"
import Task from "../Component/Task"
import { setTask } from "../Redux/MyTask"
import { mycookie } from "../Utilities/Cookies"
import { useSelector, useDispatch } from "react-redux"
import { axiosInstance } from "../Utilities/RequestResponse"
function User() {
    const setmytask = setTask
    const dispatch = useDispatch()
    const alltask = useSelector((state) => state.mytask);
    useEffect(()=>{
        axiosInstance.post("/task/getmytask",{cookie:mycookie("token")})
        .then((res)=>{
            dispatch(setTask({type:"New",task:res.data.task}))
        })
        .catch((err)=>{})
    },[])
    const [isClickTask, setisClickTask] = useState(false);
    const [title, settitle] = useState("")
    const [detail, setdetail] = useState("")
    const [description, setdescription] = useState("")
    const [Alert, setAlert] = useState(false)
    const [alerttype, setalerttype] = useState(false)
    const [alertmessage, setalertmessage] = useState("sdsdsds")
    let allow = 0
    const Alert_ref = useRef(null)
    const title_inp = useRef(null)
    const Detail_inp = useRef(null)
    const Description_inp = useRef(null)
    const priority_inp = useRef(null)
    const dealine_inp = useRef(null)

    const CreateTask = useCallback((e) => {
        if (document.getElementById('task-create').contains(e.target)) {
            allow = 1
            setisClickTask(true)
        } else {
            if (allow == 1) {
                allow = 0
                const mytitle = title_inp.current.value.trim()
                const mydetail = Detail_inp.current.value.trim()
                const mydiscription = Description_inp.current.value.trim()
                const mypriority = priority_inp.current.value
                const mydeadline = dealine_inp.current.value
                // console.log(mytitle)
                // console.log(mydetail)
                // console.log(mydiscription)
                // console.log(mypriority)
                // console.log(mydeadline)
                if (mytitle == "" || mydetail == "" || mydeadline == "" || mydiscription=="") {
                    setalerttype(false)
                    setalertmessage("Not Save All Fields Are Required")
                    setAlert(true)
                }
                else {
                    axiosInstance.post("/task/create", {
                        title: mytitle,
                        detail: mydetail,
                        description: mydiscription,
                        priority: mypriority,
                        deadline: mydeadline,
                        cookie:"dasdasdasda"
                    })
                        .then((res) => {
                            settitle("")
                            setdetail("")
                            setdescription("")
                            dealine_inp.current.value=""
                            dispatch(setmytask({ type: "Created", task: res.data.task }))

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    setalerttype(true)
                    setalertmessage("Saved")
                    setAlert(true)
                }
            }
            setTimeout(() => {
                setAlert(false)
            }, 1500);
            setisClickTask(false)
        }
    }, [])

    window.addEventListener('click', CreateTask)




    return (
        <>
            <p id="task-create-alert" ref={Alert_ref} style={{ backgroundColor: alerttype ? "rgba(179, 255, 0, 0.178)" : "rgba(255, 0, 0, 0.178)", color: alerttype ? "rgb(150, 243, 0)" : " rgb(243, 0, 0)", display: Alert ? "block" : "none" }}>{alertmessage}</p>
            <div id="task-create">
                <div id="before-click" style={{ display: isClickTask ? "none" : "block" }}>
                    <h6 id="h6-before-task">Create a task...</h6>
                </div>

                <div id="after-click" style={{ display: isClickTask ? "flex" : "none" }}>
                    <input ref={title_inp} type="text" className="notesinp" id="title_inp" placeholder="Title Here...*" value={title} onChange={(e) => { settitle(e.target.value) }} />
                    <input ref={Detail_inp} type="text" className="notesinp" id="Detail_inp" placeholder="Detail Here...*" value={detail} onChange={(e) => { setdetail(e.target.value) }} />
                    <textarea ref={Description_inp} type="text" className="notesinp" id="Description_inp" placeholder="Description Here...*" wrap="soft" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <label htmlFor="priority_inp" style={{ color: "black" }}>Priority:<span style={{ color: "red" }}>*</span></label>
                    <select ref={priority_inp} name="priority_inp" id="priority_inp" style={{ width: "40%" }}>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                    <label htmlFor="dealine_inp" style={{ color: "black" }} >Deadline:<span style={{ color: "red" }}>*</span></label>
                    <input ref={dealine_inp} type="datetime-local" id="dealine_inp" style={{ width: "40%" }} />
                </div>
            </div>
            <div id="all-task">
                {
                    alltask.map((task) => <Task key={task._id} value={task}/>)
                }
            </div>
        </>
    );
}
export default User;
