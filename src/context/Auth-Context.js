import axios from "axios"
import React,{createContext,useContext,useState} from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loginData, setLoginData] = useState({email:"adarshbalika@gmail.com",password:"adarshBalika123"})
    

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/auth/login",{
                email:loginData.email,
                password:loginData.password
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        setLoginData({email:"",password:""})
    }


    return(
        <AuthContext.Provider value={{loginData,setLoginData,handleLogin}}>
          {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}