import DOMPurify from "dompurify";
import {useNote,useArchive,useTrash} from "../../context"
import { MdRestore } from "react-icons/md";
import { BsTrash,BsFillPinFill } from "react-icons/bs";
import { BiArchiveOut,BiArchiveIn, BiEdit } from "react-icons/bi";
import "./singleNote.css"

export const SingleNote = ({note, setEditModal, isHomePage = false, isTrashPage = false, isArchivePage = false }) => {
    const {deleteNote,populateEditModal,addToNotes} = useNote()
    const {addToArchive,deleteFromArchive,restoreFromArchive} = useArchive()
    const {moveToTrash,deleteFromTrash} = useTrash()

    const {title,body,tags,_id,priority,color} = note

    const restoreHandler = (note) => {
        addToNotes(note)
        deleteFromTrash(note._id)
    }

    const clickEdit = (_id) => {
        setEditModal(isEditModal => !isEditModal)
        populateEditModal(_id)
    }

    const homeToTrashHandler = (note) => {
        deleteNote(note._id)
        moveToTrash(note)
    }

    const archiveToTrashHandler = (note) => {
        deleteFromArchive(note)
        moveToTrash(note)
    }
   
    return(
        <div className="single-note margin-xs padding-xs" style={{backgroundColor:color}}>
            <h2 className="head-md">{title}</h2>
            <div className="text-sm padding-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}></div>
            <div className="tag-container">
                {tags.map(tag => (
                    <p key={tag.value} className="text-sm  tag">{tag.value}</p>
                ))}
            </div>
            <p className="text-sm font-weight-semibold">{priority}</p>
            {
                isHomePage &&  <BsFillPinFill title="pin" className="pin-Icon icons-common "/>
            }
            <div className="option-container">
                <p>{new Date().toDateString()}</p>
                {
                    isHomePage && (
                    <div className="icon-container">
                        <BiEdit onClick={()=>clickEdit(_id)} title="edit" className="icons-common margin-xs"/>
                        <BiArchiveIn onClick={()=>addToArchive(note)} title="archive" className="icons-common margin-xs"/>
                        <BsTrash onClick={()=>homeToTrashHandler(note)} title="trash" className="icons-common margin-xs"/>
                    </div>)
                }
                {
                    isTrashPage && (
                    <div className="icon-container">
                        <MdRestore onClick={()=>restoreHandler(note)} title="archive" className="icons-common margin-xs"/>
                        <BsTrash onClick={()=>deleteFromTrash(note._id)} title="trash" className="icons-common margin-xs"/>
                    </div>)
                }
                {
                    isArchivePage && (
                    <div className="icon-container">
                        <BiArchiveOut onClick={()=>restoreFromArchive(note)} title="archive" className="icons-common margin-xs"/>
                        <BsTrash onClick={()=>archiveToTrashHandler(note)} title="trash" className="icons-common margin-xs"/>
                    </div>
                    )
                }
            </div>
        </div>
    )
}