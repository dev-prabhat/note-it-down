import {NavLink} from "react-router-dom"

import { AiOutlineHome } from "react-icons/ai";
import { BsArchive , BsTrash} from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import "./navbar.css"

const activeStyle = ({isActive}) => { return isActive ? "btn-link head-sm d-flex margin-xs  active-link" : "btn-link head-sm d-flex margin-xs "} 
export const NavBar = () => {
    return(
        <>
          <aside className="side-navbar">
          <NavLink to="/home" className={activeStyle}> <AiOutlineHome className="icon-style head-md"/> Home</NavLink>
          <NavLink to="/labels" className={activeStyle}><BiCategory className="icon-style head-md"/> Labels</NavLink>
          <NavLink to="/archive" className={activeStyle}><BsArchive className="icon-style head-md"/> Archive</NavLink>
          <NavLink to="/trash" className={activeStyle}><BsTrash className="icon-style head-md"/> Trash</NavLink>
          </aside>
        </>
    )
}