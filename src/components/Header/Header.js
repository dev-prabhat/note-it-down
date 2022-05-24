import { MdLogout ,MdDarkMode,MdLightMode} from "react-icons/md";
import { useAuth ,useFilter, useTheme} from "../../context"
import { Link, NavLink } from "react-router-dom"
import "./header.css"

export const Header = () => {
  const {filterState,filterDispatch} = useFilter()
  const {handleLogout} = useAuth()
  const {theme, setTheme} = useTheme()
  
    return(
        <header className={`website-header ${theme === "light" ? "dark-theme" : "light-theme"}`}>
            <NavLink to="/" className={`header-title font-weight-semibold ${theme === "light" ? "dark-theme" : "light-theme"}`}>
                NoteIt <span className="highlight">Down</span>
            </NavLink>
            <input 
                className="search-input border-radius-xs padding-xs text-center" 
                placeholder="Search your note..."
                onChange={(e)=>filterDispatch({type:"SEARCH",payload:e.target.value})}
                value={filterState.search}
            />
            <div className="d-flex">
              {
                theme === "dark" ? 
                <MdDarkMode className="theme-icon" onClick={()=>setTheme("light")} /> : 
                <MdLightMode className="theme-icon" onClick={()=>setTheme("dark")} />
              }
              <Link to="/profile">
                <div className="avatar header-avatar">
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