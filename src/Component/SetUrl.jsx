import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch } from "react-redux"

function SetUrl(){
const {login,role} = useSelector((state) => state.loginornot);
 const navigate = useNavigate()
 useEffect(() => {
    login?navigate("/"):navigate("/Login")
 }, []);
 return (
     <>
    </>
)
}

export default SetUrl