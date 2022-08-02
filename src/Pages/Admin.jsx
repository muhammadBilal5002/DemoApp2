import { useEffect, useState } from "react"
import UserInfo from "../Component/UserInfo"
import { setUser } from "../Redux/AllUser"
import { useSelector, useDispatch } from "react-redux"
import { axiosInstance } from "../Utilities/RequestResponse"

function Admin(){
    const dispatch = useDispatch()
    const [isok, setisok] = useState(false);
    const allusers = useSelector(state => state.allusers)
    useEffect(() => {
        axiosInstance.post("/adminmangment/GetAllUser",{})
        .then((res)=>{
            dispatch(setUser({type:"New",users:res.data.userList}))
            setisok(true)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
return(
<>
<br/>
<hr style={{color:"black",width:"90%",margin:"auto"}}/>
<h1 id="user-detail">All Users</h1>
<hr style={{color:"black",width:"90%",margin:"auto"}}/>
<div id="all-user">
    
   {
    isok?
    allusers.data.map(user => <UserInfo key={user._id} value={user}/>)
    :".."
   }
</div>
</>)
}
export default Admin