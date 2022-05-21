import { useAuth ,useFilter} from "../../context"
import { NavLink } from "react-router-dom"
import "./header.css"

export const Header = () => {
  const {filterState,filterDispatch} = useFilter()
  const {handleLogout} = useAuth()
  
    return(
      <>
        <header className="website-header">
            <NavLink to="/" className='hero-title head-lg header-title font-weight-semibold'>
                NoteIt <span className="highlight">Down</span>
            </NavLink>
            <input 
                className="search-input border-radius-xs padding-xs text-center" 
                placeholder="Search your note..."
                onChange={(e)=>filterDispatch({type:"SEARCH",payload:e.target.value})}
                value={filterState.search}
            />
            <button className="btn btn-primary border-radius-xs" onClick={handleLogout}>Logout</button>
        </header>
      </>
    )
}