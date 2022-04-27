import React,{createContext,useContext,useState,useEffect} from "react"
import { useAxios } from "../customHooks/useAxios" 

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const {response,operation} = useAxios()
    const [loginData, setLoginData] = useState({email:"",password:""})
    const [encodedToken, setEncodedToken] = useState(null)    

    useEffect(()=>{
       let localToken = localStorage.getItem("encodedToken")
       if(localToken !== null){
           setEncodedToken(localToken)
       }
    },[])

    const handleLogin = (e) => {
        e.preventDefault()
        operation({
            method:"post",
            url:"/api/auth/login",
            data :{email:loginData.email,password:loginData.password}
        })
    }

    const handleLogout = () => {
        localStorage.removeItem("encodedToken")
        setEncodedToken(null)
    }

    useEffect(()=>{
        if(response !== undefined){
            localStorage.setItem("encodedToken",response.data.encodedToken)
            setEncodedToken(response.data.encodedToken)
            setLoginData({email:"",password:""})
        }
    },[response])

        

    return(
        <AuthContext.Provider value={{encodedToken,loginData,setLoginData,handleLogin,handleLogout}}>
          {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}