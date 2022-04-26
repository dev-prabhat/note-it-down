import { Outlet,Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../context";

export const AuthRoute = () => {
    const {encodedToken} = useAuth()
    const location = useLocation()

    let from = location?.state?.from?.pathname || "/home"
    return encodedToken ? (
         <Navigate to={from} state={{from : location}} replace/>
    ) : (
        <Outlet/>
    )
}
