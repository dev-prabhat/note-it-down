import React,{useState} from "react"
import Select from "react-select"
import {useNote} from "../../context"

import { AiOutlineClose } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import "./editForm.css"
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { ColorPalette } from "../ColorPalette/ColorPalette";

const options = [
    { value: 'work', label: 'Work' },
    { value: 'exercise', label: 'Exercise' },
    { value: 'health', label: 'Health' },
    { value: "collage", label: "Collage"},
    { value: "teams", label: "Teams"},
    { value: "chores", label:"Chores"},
    { value: "creativity", label:"Creativity"},
]
  


export const EditForm = ({setEditModal}) => {
    const {editNote,setEditNote,updateNote} = useNote()
    const [isColorPalette,setIsColorPalette] = useState(false)

    const handleUpdate = (editNote) => {
        setEditModal(prev => !prev)
        updateNote(editNote)
    }
    return(
        <>
            <div className="edit-form" style={{backgroundColor:editNote.color}}>
                <input 
                    className="input-field padding-xs" 
                    type="text" 
                    placeholder="Title"
                    onChange={(e)=>setEditNote((prev) => ({...prev,title:e.target.value}))}
                    value={editNote.title}
                    required
                />
                <AiOutlineClose 
                    title="close" 
                    className="close-Icon icons-common" 
                    onClick={()=>setEditModal(prev => !prev)}
                />
                <RichTextEditor 
                    className="padding-xs" 
                    setRichTextEditor={setEditNote} 
                    richTextContent={editNote}
                />
                <div className="action-container">
                    <MdUpdate 
                        title="update" 
                        className="icons-common margin-xs" 
                        onClick={()=>handleUpdate(editNote)}
                    />
                    <IoIosColorPalette 
                        title="bg-color" 
                        className="icons-common margin-xs" 
                        onClick={()=>setIsColorPalette(prev => !prev)}
                    />
                    <ColorPalette 
                        setIsColorPalette={setIsColorPalette} 
                        isColorPalette={isColorPalette} 
                        setBgColor={setEditNote}
                    />
                    <Select
                        defaultValue={editNote.tags} 
                        onChange={(e)=>setEditNote((prev) => ({...prev,tags:[...e]}))} 
                        options={options} 
                        isMulti={true} 
                        isSearchable={true}
                    />
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