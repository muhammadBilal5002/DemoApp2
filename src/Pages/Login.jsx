import {useState, useRef} from "react"
import {useNavigate} from "react-router-dom"
import { axiosInstance } from "../Utilities/RequestResponse";
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/LoginOrNot";
async function loginRequest(email,password,loginbtn,dispatch){
  email = email.trim()
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(validRegex) || (password.length < 7)){
    return alert("Invalid Values")
  }
  loginbtn.current.disabled = true
  loginbtn.current.innerText = "Loading.."
  await axiosInstance.post("/userAuthentication/Login",{email,password})
   .then((response) => {
      if(response.data.status){
        localStorage.setItem("Role",response.data.user.role)
        dispatch(setLogin("login"))
      }
      else{
        loginbtn.current.disabled = false
        loginbtn.current.innerText = "Login"
        return alert(response.data.message)
      }
    }, (error) => {
      loginbtn.current.disabled = false
      loginbtn.current.innerText = "Login"
      return alert(error.response.data.message)
    });
}   

function Login() {
  const Navigation = useNavigate()
  const dispatch = useDispatch()
  const loginbtn = useRef(null)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <>
      <section className="gradient-custom">
        <div className="container py-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card " style={{ borderRadius: '1rem', backgroundColor: "rgba(170, 170, 170, 0.1)" }}>
                <div className="card-body px-5 py-2 text-center">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-black mb-6 pb-3">Please enter your login and password!</p>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }}/>
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Enter Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>
                  </form>
                  <button className="btn btn-outline-light btn-lg px-5 mb-4" type="submit" style={{ backgroundColor: "rgba(116, 24, 24, 1)" }} ref={loginbtn} onClick={()=>{loginRequest(email,password,loginbtn,dispatch)}} >Login</button>
                  <p className="small pt-3"><a href="#!" style={{ color: "rgba(116, 24, 24, 0.9)" }} onClick={()=>{alert("Forgot Password Option Not Avalibale Right Now")}}>Forgot password?</a></p>

                  <div>
                    <p className="mb-2">Don't have an account? <a className="fw-bold" style={{ color: "rgba(116, 24, 24, 0.9)" ,cursor:"pointer"} } onClick={()=>{Navigation("/Register")}}>Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;
