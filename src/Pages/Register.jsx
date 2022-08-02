import {useState,useRef} from "react"
import {useNavigate} from "react-router-dom"
import {axiosInstance} from "../Utilities/RequestResponse"
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/LoginOrNot";

async function registerRequest(username,email,password,repassword,registerbtn,dispatch){
  email = email.trim()
  username = username.trim()
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(username==""||email==""||password==""||repassword==""||repassword!=password||password.length<5||!email.match(validRegex)){
      return alert("Please Enter Valid Information")
  }
  registerbtn.current.disabled = true
  registerbtn.current.innerText = "Loading.."
  await axiosInstance.post("/userAuthentication/Register",{name:username,email,password,repassword})
   .then((response) => {
      if(response.data.status){
        localStorage.setItem("Role",response.data.user.role)
        dispatch(setLogin("login"))
      }
      else{
        registerbtn.current.disabled = false
        registerbtn.current.innerText = "Register"
        return alert(response.data.message)
      }
    }, (error) => {
      registerbtn.current.disabled = false
      registerbtn.current.innerText = "Register"
      return alert(error.response.data.message)
    });
}   

function Register() {
  const Navigation = useNavigate()
  const dispatch = useDispatch()
  const registerbtn = useRef(null)
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [repassword, setrepassword] = useState("")
    return (
      <>
<section className="vh-100 pb-5">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15,backgroundColor:"rgba(170, 170, 170, 0.1)"}}>
            <div className="card-body p-4 ">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"  placeholder="Name Atleast 4 Char" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg"  placeholder="Valid Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Atleast 6 Char" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg"  placeholder="Repeat Password" value={repassword} onChange={(e)=>{setrepassword(e.target.value)}} />
                  <label className="form-label" htmlFor="form3Example4cdg" >Repeat your password</label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-light btn-lg px-5" style={{backgroundColor:"rgba(116, 24, 24, 1)"}} ref={registerbtn} onClick={()=>{registerRequest(username,email,password,repassword,registerbtn,dispatch)}}>Register</button>
                </div>
                <p className="text-center text-balck mt-5 mb-0">Have already an account? <a className="fw-bold" style={{color:"rgba(116, 24, 24, 0.9)",cursor:"pointer"}}  onClick={()=>{Navigation("/login")}}><u>Login here</u></a></p>
              </form>
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
  
  export default Register;