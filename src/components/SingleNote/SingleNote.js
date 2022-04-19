import {useNote,useArchive} from "../../context"
import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { BiArchiveIn, BiEdit } from "react-icons/bi";

import "./singleNote.css"

export const SingleNote = ({note}) => {
    const {deleteNote} = useNote()
    const {addToArchive} = useArchive()
    const {title,body,label,id} = note
    return(
        <div className="single-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <p className="text-sm">{body}</p>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <BsFillPinFill title="pin" className="pin-Icon icons-common "/>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <BiEdit title="edit" className="icons-common margin-xs"/>
                    <BiArchiveIn onClick={()=>addToArchive(note)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>deleteNote(id)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}