import {Link, useNavigate} from "react-router-dom"
import { useRef, useState } from "react"
import {ClearCookies} from '../Utilities/Cookies';
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/LoginOrNot";
import { clearUser } from "../Redux/AllUser";
import { clearTask } from "../Redux/MyTask";

function logout(dispatch){
dispatch(clearUser())
dispatch(clearTask())
ClearCookies()
window.localStorage.setItem("Role","")
dispatch(setLogin("logout"))
}

function Navigation(props) {
const dispatch = useDispatch()
const [isShown, setisShown] = useState(false)

window.addEventListener('resize', function(){
    if (window.innerWidth > 650) {
        setisShown(false)
    } 
})

    return (
        <header>
    <nav id="nav1">
    <h3 style={{margin:"0"}}>KEEP</h3>
    <ul style={{margin: "0"}}>
        <li><input id="search" type="text" value="Not Avalibale Right Now!" disabled></input></li>
        <li><button className="button" id="searchbtn">Search</button></li>
    </ul>
    <div>
    <Link to="/" onClick={()=>{logout(dispatch)}}>
        <img className="logoimg" src="./images/avtar.jpg" />
    </Link>
    </div>
    <h3 id="menu"onClick={()=>{
        setisShown(!isShown)
    }}>MENU</h3>
    </nav>
    <nav id="nav2" style={{display:isShown?"block":"none"}}>
    <br/>
    <ul style={{margin: "0"}}>
        <div>

        <li><input id="search" type="text" value="Not Avalibale Right Now!" disabled></input></li>
        <li><button  className="button" id="searchbtn">Search</button></li>

        </div>
    </ul>

    <br/>
    <br/>
    <div>

    <Link  to="/" onClick={()=>{logout(dispatch)}}>
        <img className="logoimg" src="./images/avtar.jpg"/>
    </Link>
    
   
    </div>
   
    </nav>

</header>
    );
}

export default Navigation;
