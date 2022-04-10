import "./landingpage.css"
import {NavLink} from "react-router-dom"

export const LandingPage = () => {
    return(
        <>
           <main className="landing-page-container">
               <section className="hero-info">
                   <h1 className='hero-title head-xl'>Note It Down</h1>
                   <div className="hero-detail">
                        <h2 className="hero-subtitle head-lg">Meet your modern Note Taking Application</h2>
                        <p className="hero-description head-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        </p>
                   </div> 
                   <div className="action-buttons">
                    <NavLink to="/signup" className="btn btn-primary btn-link head-sm margin-sm">Register Now</NavLink>
                    <NavLink to="/home" className="btn btn-link margin-sm">Go to Notes</NavLink>
                    <NavLink to="/login" className="head-sm btn-link d-block padding-sm">Already have an account</NavLink>
                   </div>
               </section>
               <section className="hero-image">
                   <figure className="img-container">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/svg/logo.svg"} alt="landing_page_image"/>
                   </figure>
               </section>
           </main>
        </>
    )
}