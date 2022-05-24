import {useState} from "react"
import { Link } from "react-router-dom";
import {useAuth} from "../../context"
import {useDocument} from "../../customHooks";
import { BiShow,BiHide } from "react-icons/bi";
import "./login.css"



export const Login = () => {
  useDocument("| Login")
  const [showPassword, setShowPassword] = useState(false)
  const {loginData, setLoginData,handleLogin} = useAuth()
    return(
      <>
         <main className="login-page"> 
          <form className="login-form border-radius-xs" onSubmit={handleLogin}>
            <h1 className="head-md text-center text-gray padding-xs margin-xs">Welcome to NoteIt-<span className="highlight">Down</span></h1>
            <label className="form-label">Email Address:</label>
              <input
                type="email"
                className="form-field border-radius-xs padding-xs"
                placeholder="Username or Email"
                onChange={(e) => setLoginData((prev) => ({...prev,email:e.target.value}))}
                value={loginData.email}
                required
              />
               
              <div className="form-field-container">
              <label className="form-label">Password: </label>
                <input
                  type={showPassword ? "text" :"password"}
                  className="form-field border-radius-xs padding-xs"
                  placeholder="Password"
                  onChange={(e) => setLoginData((prev) => ({...prev,password:e.target.value}))}
                  value={loginData.password}
                  required
                />
                {
                  showPassword ? 
                  <BiShow className="show-hide-icon" onClick={()=>setShowPassword(prev =>!prev)}/> : 
                  <BiHide className="show-hide-icon" onClick={()=>setShowPassword(prev =>!prev)}/>
                }
              </div>
                <div className="other-option-container margin-xs">
                   <div>
                      <input type="checkbox" id="remember-me"/>
                      <label htmlFor="remember-me" className="text-gray padding-xs">Remember me</label>
                   </div>
                    <p className="test-credential padding-xs" 
                      onClick={()=>setLoginData({email:"adarshbalika@gmail.com",password:"adarshBalika123"})}>
                      Use Test Credential
                    </p>
                </div>
              <button className="btn btn-primary border-radius-xs text-sm d-100"> Login</button>
              <p className="text-center text-gray font-weight-semibold margin-xs">Don't have an Account?
                <Link className="highlight" to="/signup"> Click Here</Link>
              </p>
          </form>
         </main>
      </>
    )
}