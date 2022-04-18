import {useNote} from "../../context/Note-Context"
import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { IoIosColorPalette , IoIosAddCircleOutline} from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";
import "./inputForm.css"


export const InputForm = () => {
    const {singleNote,setSingleNote,handleSubmit} = useNote()
    return(
        <div className="input-form">
            <input 
                className="input-field padding-xs" 
                type="text" 
                placeholder="Title"
                onChange={(e)=>setSingleNote((prev) => ({...prev,title:e.target.value}))}
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
            <div className="main-action-btn">
                <IoIosAddCircleOutline title="add" className="icons-common margin-xs" onClick={handleSubmit}/>
                <IoIosColorPalette title="bg-color" className="icons-common margin-xs"/>
                <select 
                    title="labels"
                    value={singleNote.label}
                    className="margin-xs padding-xxs font-weight-bold text-gray" 
                    onChange={(e)=>setSingleNote((prev)=>({...prev,label:e.target.value}))}
                >
                    <option>Choose</option>
                    <option value="Office">Office</option>
                    <option value="Home">Home</option>
                    <option value="Blog">Blog</option>
                    <option value="Diet">Diet</option>
                    <option value="Exercise">Exercise</option>
                    <option value="Others">Others</option>
                </select>
                </div>
                <div>
                    <BiArchiveIn title="archive" className="icons-common margin-xs"/>
                    <BsTrash title="trash" className="icons-common margin-xs"/>
                </div>
            </div>
            
        </div>
    )
}