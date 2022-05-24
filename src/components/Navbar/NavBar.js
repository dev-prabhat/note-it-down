import {NavLink} from "react-router-dom"

import { AiOutlineHome } from "react-icons/ai";
import { BsArchive , BsTrash} from "react-icons/bs";
import { useTheme } from "../../context";
import "./navbar.css"

const activeStyle = ({isActive}) => { return isActive ? "btn-link head-sm d-flex margin-xs active-link" : "btn-link head-sm d-flex margin-xs "} 
export const NavBar = () => {
    const {theme} = useTheme()
    return(
        <>
          <aside className={`side-navbar ${theme === "light" ? "dark-theme" : "light-theme"}`}>
              <NavLink to="/home" className={activeStyle}> <AiOutlineHome className="icon-style head-md"/> Home</NavLink>
              <NavLink to="/archive" className={activeStyle}><BsArchive className="icon-style head-md"/> Archive</NavLink>
              <NavLink to="/trash" className={activeStyle}><BsTrash className="icon-style head-md"/> Trash</NavLink>
          </aside>
        </>
    )
}