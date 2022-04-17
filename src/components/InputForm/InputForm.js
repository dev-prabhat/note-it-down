import {useNote} from "../../context/Note-Context"
import { BsFillPinFill,BsTrash } from "react-icons/bs";
import { IoIosColorPalette , IoIosAddCircleOutline} from "react-icons/io";
import { BiCategory,BiArchiveIn } from "react-icons/bi";
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
            />
            <BsFillPinFill className="pin-Icon icons-common "/>
            <textarea 
                className="input-field padding-xs" 
                placeholder="write here..." 
                type="text" 
                rows="5" 
                cols="20"
                onChange={(e)=>setSingleNote((prev) => ({...prev,body:e.target.value}))}
                value={singleNote.body}>
            </textarea>
            <div className="action-container">
            <div className="main-action-btn">
                <IoIosAddCircleOutline className="icons-common margin-xs" onClick={handleSubmit}/>
                <IoIosColorPalette className="icons-common margin-xs"/>
                <select className="margin-xs">
                    <option>Labels</option>
                    <option>Office</option>
                    <option>Home</option>
                    <option>Blog</option>
                    <option>Diet</option>
                    <option>Exercise</option>
                    <option>Others</option>
                </select>
                </div>
                <div>
                    <BiArchiveIn className="icons-common margin-xs"/>
                    <BsTrash className="icons-common margin-xs"/>
                </div>
            </div>
            
        </div>
    )
}