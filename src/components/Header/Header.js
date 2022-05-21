import { MdLogout } from "react-icons/md";
import { useAuth ,useFilter} from "../../context"
import { Link, NavLink } from "react-router-dom"
import "./header.css"

export const Header = () => {
  const {filterState,filterDispatch} = useFilter()
  const {handleLogout} = useAuth()
  
    return(
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
            <div className="d-flex">
              <Link to="/profile">
                <div className="avatar avatar-xs">
                  <img
                    className="img-responsive img-round"
                    src={process.env.PUBLIC_URL +"/svg/avatarIcon.svg"}
                    alt="avatar"
                  />
                </div>
              </Link>
              <MdLogout onClick={handleLogout} className="logout-icon"/>
            </div>   
        </header>
    )
}