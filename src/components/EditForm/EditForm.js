import React from "react"
import {useNote} from "../../context"

import { AiOutlineClose } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import "./editForm.css"
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";

export const EditForm = ({setEditModal}) => {
    const {editNote,setEditNote,updateNote} = useNote()

    const handleUpdate = (editNote) => {
        setEditModal(prev => !prev)
        updateNote(editNote)
    }
    return(
        <>
            <div className="edit-form">
                <input 
                    className="input-field padding-xs" 
                    type="text" 
                    placeholder="Title"
                    onChange={(e)=>setEditNote((prev) => ({...prev,title:e.target.value}))}
                    value={editNote.title}
                    required
                />
                <AiOutlineClose title="pin" className="close-Icon icons-common" onClick={()=>setEditModal(prev => !prev)}/>
                <RichTextEditor className="padding-xs" setRichTextEditor={setEditNote} richTextContent={editNote}/>
                <div className="action-container">
                    <MdUpdate title="update" className="icons-common margin-xs" onClick={()=>handleUpdate(editNote)}/>
                    <IoIosColorPalette title="bg-color" className="icons-common margin-xs"/>
                    <select 
                        title="labels"
                        value={editNote.label}
                        className="margin-xs padding-xxs font-weight-bold text-gray" 
                        onChange={(e)=>setEditNote((prev)=>({...prev,label:e.target.value}))}
                    >
                        <option>Choose</option>
                        <option value="Office">Office</option>
                        <option value="Home">Home</option>
                        <option value="Blog">Blog</option>
                        <option value="Diet">Diet</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Others">Others</option>
                    </select>
                    <select 
                        title="priority"
                        value={editNote.priority}
                        className="margin-xs padding-xxs font-weight-bold text-gray" 
                        onChange={(e)=>setEditNote((prev)=>({...prev,priority:e.target.value}))}
                    >
                        <option>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
           </div>
        </>
    )
}