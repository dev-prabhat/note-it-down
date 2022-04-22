import {useNote,useArchive,useModal} from "../../context"
import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { BiArchiveIn, BiEdit } from "react-icons/bi";

import "./singleNote.css"

export const SingleNote = ({note}) => {
    const {setShowModal} = useModal()
    const {deleteNote,handleEdit} = useNote()
    const {addToArchive} = useArchive()
    const {title,body,label,id,priority} = note

    const clickEdit = (id) => {
        setShowModal(prev => !prev)
        handleEdit(id)
    }

    const handleArchive = (note) => {
        deleteNote(note.id)
        addToArchive(note)
    }

    return(
        <div className="single-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <p className="text-sm">{body}</p>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <p className="text-sm font-weight-semibold">{priority}</p>
            <BsFillPinFill title="pin" className="pin-Icon icons-common "/>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <BiEdit onClick={()=>clickEdit(id)} title="edit" className="icons-common margin-xs"/>
                    <BiArchiveIn onClick={()=>handleArchive(note)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>deleteNote(id)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}