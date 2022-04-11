import {NavLink} from "react-router-dom"

import { AiOutlineHome } from "react-icons/ai";
import { BsArchive , BsTrash} from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import "./navbar.css"

const activeStyle = ({isActive}) => { return isActive ? "btn-link head-md d-block margin-xs text-center active-link" : "btn-link head-md d-block margin-xs text-center"} 
export const NavBar = () => {
    return(
        <>
          <aside className="side-navbar">
          <NavLink to="/home" className={activeStyle}> <AiOutlineHome/> Home</NavLink>
          <NavLink to="/labels" className={activeStyle}><BiCategory/> Labels</NavLink>
          <NavLink to="/archive" className={activeStyle}><BsArchive/> Archive</NavLink>
          <NavLink to="/trash" className={activeStyle}><BsTrash/> Trash</NavLink>
          </aside>
        </>
    )
}