import {useState} from "react"
import {useAuth} from "../../context"
import {useDocument} from "../../customHooks";
import { BiShow,BiHide } from "react-icons/bi";
import "./signUp.css"
import { Link } from "react-router-dom";


export const SignUp = () => {
  useDocument("| SignUp")
  const [showPassword, setShowPassword] = useState(false)
  const {signupUser, setSignUpUser,handleSignUp} = useAuth()
    return(
      <>
         <main className="sign-page"> 
          <form className="signup-form border-radius-xs" onSubmit={handleSignUp}>
            <h1 className="head-md text-center text-gray padding-xs margin-xs">Welcome to NoteIt-<span className="highlight">Down</span></h1>
            
                <label className="form-label">FirstName</label>
                    <input
                    type="text"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="john"
                    onChange={(e)=> setSignUpUser((prev) => ({...prev,firstName:e.target.value}))}
                    value={signupUser.firstName}
                    required
                    />

                <label className="form-label">LastName: </label>
                    <input
                    type="text"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="doe"
                    onChange={(e)=> setSignUpUser((prev) => ({...prev,lastName:e.target.value}))}
                    value={signupUser.lastName}
                    required
                    />
    
               <label className="form-label">Email Address:</label>
                <input
                    type="email"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="Username or Email"
                    onChange={(e) => setSignUpUser((prev) => ({...prev,email:e.target.value}))}
                    value={signupUser.email}
                    required
                />
               
            <div className="form-field-container">
              <label className="form-label">Password: </label>
                <input
                  type={showPassword ? "text" :"password"}
                  className="form-field border-radius-xs padding-xs"
                  placeholder="Password"
                  onChange={(e) => setSignUpUser((prev) => ({...prev,password:e.target.value}))}
                  value={signupUser.password}
                  required
                />
                {
                  showPassword ? 
                  <BiShow className="show-hide-icon" onClick={()=>setShowPassword(prev =>!prev)}/> : 
                  <BiHide className="show-hide-icon" onClick={()=>setShowPassword(prev =>!prev)}/>
                }
              </div>
                   <div className=" margin-xs">
                      <input type="checkbox" id="remember-me"/>
                      <label htmlFor="remember-me" className="text-gray padding-xs">Remember me</label>
                   </div>
              <button className="btn btn-primary border-radius-xs text-sm d-100">SignUp</button>
              <p className="text-center text-gray font-weight-semibold margin-xs">Already have an Account 
                <Link className="highlight" to="/login"> Click Here</Link>
              </p>
          </form>
         </main>
      </>
    )
}