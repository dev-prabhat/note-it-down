import {useNote,useArchive,useModal,useTrash} from "../../context"
import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { BiArchiveIn, BiEdit } from "react-icons/bi";

import "./singleNote.css"

export const SingleNote = ({note}) => {
    const {setShowModal} = useModal()
    const {deleteNote,populateEditModal} = useNote()
    const {addToArchive} = useArchive()
    const {moveToTrash} = useTrash()

    const {title,body,label,_id,priority} = note

    const clickEdit = (_id) => {
        setShowModal(prev => !prev)
        populateEditModal(_id)
    }

    const trashHandler = (note) => {
        deleteNote(note._id)
        moveToTrash(note)
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
                    <BiEdit onClick={()=>clickEdit(_id)} title="edit" className="icons-common margin-xs"/>
                    <BiArchiveIn onClick={()=>addToArchive(note)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>trashHandler(note)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}