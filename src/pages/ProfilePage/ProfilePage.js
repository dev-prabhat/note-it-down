import { Header, NavBar} from "../../components/index"
import {useAuth} from "../../context"
import {useDocument} from "../../customHooks"
import "../commonPage.css"
import "./profilepage.css"


export const ProfilePage = () => {
    useDocument("| Profile")
    const {user} = useAuth()
    const  localUser = JSON.parse(localStorage.getItem("noteUser"))

    const currentUser = {
        firstName:localUser.firstName || user.firstName,
        lastName:localUser.lastName || user.lastName,
        email:localUser.email || user.email
    }
    
   
    return(
         <main className="main-page">
            <Header/>
            <NavBar/>
            <div className="page-content padding-xs">
                 <div className="profile__wrapper padding-md">
                    <div className="avatar avatar-text avatar-text-sm margin-xs">
                        {`${currentUser.firstName.slice(0,1)}${currentUser.lastName.slice(0,1)}`}
                    </div>
                    <h1 className="head-sm margin-xs">FirstName:  {currentUser.firstName}</h1>
                    <h2 className="head-sm margin-xs">LastName:  {currentUser.lastName}</h2>
                    <p className="head-sm margin-xs">Email:  {currentUser.email}</p>
                </div>
             </div>
         </main>
    )
}