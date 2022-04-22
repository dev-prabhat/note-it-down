import {useArchive,useTrash} from "../../context"

import { MdRestore } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import "./trashNote.css"

export const TrashNote = ({trashNote}) => {
    const {addToArchive} = useArchive()
    const {deleteFromTrash} = useTrash()

    const {title,body,label,priority} = trashNote

    const restoreHandler = (trashNote) => {
        addToArchive(trashNote)
        deleteFromTrash(trashNote)
    }

    return(
        <div className="trash-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <p className="text-sm">{body}</p>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <p className="text-sm font-weight-semibold">{priority}</p>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <MdRestore onClick={()=>restoreHandler(trashNote)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>deleteFromTrash(trashNote)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}