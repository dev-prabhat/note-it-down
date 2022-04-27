import {useState} from "react"
import {useAuth} from "../../context"

import { BiShow,BiHide } from "react-icons/bi";
import "./login.css"

export const Login = () => {
  const [showPassword, setShowPassord] = useState(false)
  const {loginData, setLoginData,handleLogin} = useAuth()
    return(
      <>
         <main className="d-flex login-page"> 
           <figure className="img-wrapper">
              <img className="img-responsive" src={`${process.env.PUBLIC_URL}/svg/Add notes-bro.svg`} alt="notes_bro"/>
           </figure>
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
                  <BiShow className="show-hide-icon" onClick={()=>setShowPassord(prev =>!prev)}/> : 
                  <BiHide className="show-hide-icon" onClick={()=>setShowPassord(prev =>!prev)}/>
                }
              </div>
                <div className="other-option-container margin-xs">
                   <div>
                      <input type="checkbox" id="remember-me" required/>
                      <label htmlFor="remember-me" className="text-gray padding-xs">Remember me</label>
                   </div>
                    <p className="test-credential padding-xs" 
                      onClick={()=>setLoginData({email:"adarshbalika@gmail.com",password:"adarshBalika123"})}>
                      Use Test Credential
                    </p>
                </div>
              <button className="btn btn-primary border-radius-xs text-sm d-100"> Login</button>
          </form>
         </main>
      </>
    )
}