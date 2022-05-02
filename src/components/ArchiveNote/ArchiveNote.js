import DOMPurify from "dompurify";
import {useArchive,useTrash} from "../../context"
import { BsTrash } from "react-icons/bs";
import { BiArchiveOut } from "react-icons/bi";

import "./archiveNote.css"

export const ArchiveNote = ({archiveNote}) => {
    const {deleteFromArchive,restoreFromArchive} = useArchive()
    const {moveToTrash} = useTrash()
    const {title,body,label,priority} = archiveNote


    const trashHandler = (archiveNote) => {
        deleteFromArchive(archiveNote)
        moveToTrash(archiveNote)
    }

    return(
        <div className="archive-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <div className="text-sm padding-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}></div>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <p className="text-sm font-weight-semibold">{priority}</p>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <BiArchiveOut onClick={()=>restoreFromArchive(archiveNote)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>trashHandler(archiveNote)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}