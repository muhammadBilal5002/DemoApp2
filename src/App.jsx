import Login from "./Pages/Login"
import Register from "./Pages/Register"
import User from "./Pages/User"
import Admin from "./Pages/Admin"
import TaskDetail from "./Pages/TaskDetail"
import OverPage from "./Pages/OverPage"
import SetUrl from "./Component/SetUrl"
import { GetCookies } from "./Utilities/Cookies"
import Navigation from "./Component/Navigation"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { setLogin,setRole } from "./Redux/LoginOrNot"
import { useSelector, useDispatch } from "react-redux"
function App() {
  const dispatch = useDispatch();
  const { login, Role } = useSelector((state) => state.loginornot);
  if (GetCookies("token") != undefined) {
    dispatch(setLogin("login"))
    dispatch(setRole(localStorage.getItem("Role")))
  }
  return (
    <>
      <OverPage />
      <Router>
      {login ?<Navigation/>:<></>}
        <Routes>
          {
            login ?
            Role == "Admin" ?
            <>
                  <Route path="/" element={<Admin/>}></Route>
                  <Route path="/taskdetail/:id" element={<TaskDetail/>}></Route>
                  <Route path="*" element={<SetUrl/>}></Route>
                </>
                :
                <>
                  <Route path="/" element={<User/>}></Route>
                  <Route path="*" element={<SetUrl />}></Route>
                </>

              :
              <>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={<SetUrl />}></Route>
              </>
          }
        </Routes>
      </Router>
    </>


  );
}

export default App;
