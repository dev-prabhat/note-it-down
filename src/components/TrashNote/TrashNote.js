import DOMPurify from "dompurify";
import {useTrash,useNote} from "../../context"
import { MdRestore } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import "./trashNote.css"

export const TrashNote = ({trashNote}) => {
    const {deleteFromTrash} = useTrash()
    const {addToNotes} = useNote()

    const {title,body,label,priority} = trashNote
    
    const restoreHandler = (trashNote) => {
        addToNotes(trashNote)
        deleteFromTrash(trashNote._id)
    }

    return(
        <div className="trash-note margin-xs padding-xs">
            <h2 className="head-md">{title}</h2>
            <div className="text-sm padding-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}></div>
            <p className="text-sm font-weight-semibold tag">#{label}</p>
            <p className="text-sm font-weight-semibold">{priority}</p>
            <div className="option-container">
                <p>Created on Date</p>
                <div className="icon-container">
                    <MdRestore onClick={()=>restoreHandler(trashNote)} title="archive" className="icons-common margin-xs"/>
                    <BsTrash onClick={()=>deleteFromTrash(trashNote._id)} title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
        </div>
    )
}