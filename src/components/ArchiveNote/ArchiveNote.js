import {useArchive,useNote} from "../../context"
import { BsTrash } from "react-icons/bs";
import { BiArchiveOut } from "react-icons/bi";

import "./archiveNote.css"

export const ArchiveNote = ({archiveNote}) => {
    const {deleteFromArchive} = useArchive()
    const {addFromArchive} = useNote()
    const {title,body,label,priority} = archiveNote

    const handleArchiveOut = (archiveNote) => {
        deleteFromArchive(archiveNote)
        addFromArchive(archiveNote)
    }

    return(
        <div className="archive-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <p className="text-sm">{body}</p>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <p className="text-sm font-weight-semibold">{priority}</p>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <BiArchiveOut onClick={()=>handleArchiveOut(archiveNote)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>deleteFromArchive(archiveNote)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}