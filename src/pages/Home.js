import {Header, InputForm, NavBar} from "../components"
import "./commonPage.css"

export const Home = () => {
    return(
        <>
         <main className="main-page">
             <Header/>
             <NavBar/>
             <div className="page-content">
              <InputForm/>
             </div>
         </main>
        </>
    )
} 