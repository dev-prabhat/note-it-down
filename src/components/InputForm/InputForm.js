import {v4 as uuid} from "uuid"
import {useNote,useArchive} from "../../context"

import { BsFillPinFill } from "react-icons/bs";
import { IoIosColorPalette , IoIosAddCircleOutline} from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";

import "./inputForm.css"


export const InputForm = () => {
    const {singleNote,setSingleNote,handleSubmit} = useNote()
    const {addToArchive} = useArchive()
    return(
        <div className="input-form">
            <input 
                className="input-field padding-xs" 
                type="text" 
                placeholder="Title"
                onChange={(e)=>setSingleNote((prev) => ({...prev,id:uuid(),title:e.target.value}))}
                value={singleNote.title}
                required
            />
            <BsFillPinFill title="pin" className="pin-Icon icons-common "/>
            <textarea 
                className="input-field padding-xs" 
                placeholder="write here..." 
                type="text" 
                rows="5" 
                cols="20"
                onChange={(e)=>setSingleNote((prev) => ({...prev,body:e.target.value}))}
                value={singleNote.body}
                required
            >
            </textarea>
            <div className="action-container">
                <IoIosAddCircleOutline title="add" className="icons-common margin-xs" onClick={handleSubmit}/>
                <IoIosColorPalette title="color" className="icons-common margin-xs"/>
                <BiArchiveIn onClick={()=>addToArchive(singleNote)} title="archive" className="icons-common margin-xs"/>
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