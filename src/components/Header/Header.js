import { NavLink } from "react-router-dom"
import "./header.css"

export const Header = () => {
    return(
      <>
        <header className="website-header">
            <NavLink to="/" className='hero-title head-lg header-title font-weight-semibold'>
                NoteIt <span className="highlight">Down</span>
            </NavLink>
            <input className="search-input border-radius-xs padding-xs text-center" placeholder="Search your note..."/>
            <button className="btn btn-primary">Mode</button>
        </header>
      </>
    )
}