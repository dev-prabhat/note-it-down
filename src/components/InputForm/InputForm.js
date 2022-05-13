import {useNote} from "../../context"
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";

import { IoIosColorPalette , IoIosAddCircleOutline} from "react-icons/io";
import "./inputForm.css"
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";



export const InputForm = ({setInputModal}) => {
    const {singleNote,setSingleNote,addToNotes} = useNote()
    const [isColorPalette, setIsColorPalette] = useState(false)
    
    const handleNote = () => {
        setInputModal(prev => !prev)
        addToNotes(singleNote)
    }

    return(
        <div className={`input-form`} style={{backgroundColor:singleNote.color}}>
            <input 
                className="input-field padding-xs" 
                type="text" 
                placeholder="Title"
                onChange={(e)=>setSingleNote((prev) => ({...prev,title:e.target.value}))}
                value={singleNote.title}
                required
            />
            <RichTextEditor setRichTextEditor={setSingleNote} richTextContent={singleNote}/>
            <div className="action-container">
                <IoIosAddCircleOutline title="add" className="icons-common margin-xs" onClick={() =>handleNote(singleNote)}/>
                <IoIosColorPalette title="color" className="icons-common margin-xs" onClick={()=>setIsColorPalette(prev => !prev)}/>
                <ColorPalette setIsColorPalette={setIsColorPalette} setBgColor={setSingleNote} isColorPalette={isColorPalette}/>
                <select 
                    title="labels"
                    value={singleNote.label}
                    className="margin-xs padding-xxs font-weight-bold text-gray" 
                    onChange={(e)=>setSingleNote((prev)=>({...prev,label:e.target.value}))}
                >
                    <option>Labels</option>
                    <option value="Office">Office</option>
                    <option value="Home">Home</option>
                    <option value="Blog">Blog</option>
                    <option value="Diet">Diet</option>
                    <option value="Exercise">Exercise</option>
                    <option value="Others">Others</option>
                </select>
                <select 
                    title="priority"
                    value={singleNote.priority}
                    className="margin-xs padding-xxs font-weight-bold text-gray" 
                    onChange={(e)=>setSingleNote((prev)=>({...prev,priority:e.target.value}))}
                >
                    <option>Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </div>
    )
}