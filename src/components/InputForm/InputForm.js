import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { BiCategory,BiArchiveIn } from "react-icons/bi";

import "./inputForm.css"

export const InputForm = () => {
    return(
        <form className="input-form">
            <input className="input-field padding-xs" type="text" placeholder="Title"/>
            <textarea className="input-field padding-xs" placeholder="write here..." rows="5" cols="20"></textarea>
            <BsFillPinFill className="pin-Icon"/>
            <div className="icon-container">
            <IoIosColorPalette className="icons-common"/>
            <BiCategory className="icons-common"/>
            <BiArchiveIn className="icons-common"/>
            <BsTrash className="icons-common"/>
            </div>
        </form>
    )
}