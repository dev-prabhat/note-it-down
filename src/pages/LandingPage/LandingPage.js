import {NavLink} from "react-router-dom"
import {useAuth} from "../../context/index"
import useDocument from "../../customHooks/useDocument"

import "./landingpage.css"


export const LandingPage = () => {
    useDocument("")
    const {encodedToken} = useAuth()
    return(
        <>
           <main className="landing-page-container">
               <section className="hero-info">
                   <h1 className='hero-title head-xl'>NoteIt <span className="highlight">Down</span></h1>
                   <div className="hero-detail">
                        <h2 className="hero-subtitle head-lg">Meet your modern <span className="highlight"> Note Taking Application</span></h2>
                        <p className="hero-description head-md text-gray"> Don't understand how to manage your daily task and workflow , Here is your solution Just Create your Account and manages your workflow in modern way  
                        </p>
                   </div> 
                   <div className="action-buttons">
                       {
                          encodedToken ? ( <NavLink to="/home" className="btn btn-link margin-sm border-radius-xs">Go to Notes</NavLink>) 
                          : (
                              <ul className="styled-list">
                                <li className="list-style-inline">
                                  <NavLink to="/signup" className="btn btn-primary btn-link head-sm border-radius-xs">SignUp</NavLink>
                                </li>
                                <li className="list-style-inline">
                                  <NavLink to="/login" className="btn-link head-sm">Login</NavLink>
                                </li>
                            </ul>
                          )
                       }
                   </div>
               </section>
               <section className="hero-image">
                   <figure className="img-container">
                       <img className="img-responsive" src={`${process.env.PUBLIC_URL}/svg/logo.svg`} alt="landing_page_image"/>
                   </figure>
               </section>
           </main>
        </>
    )
}