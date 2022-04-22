import React from "react"
import ReactDOM from "react-dom";
import {useModal,useNote} from "../../context"
import { CSSTransition } from "react-transition-group";

import { AiOutlineClose } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import "./modal.css";

export const Modal = () => {
  const {editNote,setEditNote,updateNote} = useNote()
  const {showModal, setShowModal} = useModal()
  const nodeRef = React.useRef(null)

  const handleUpdate = (editNote) => {
    setShowModal(prev => !prev)
    updateNote(editNote)
  }
  
  return ReactDOM.createPortal(
    <CSSTransition nodeRef={nodeRef} in={showModal} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div ref={nodeRef} className={`modal-wrapper ${showModal ? "show" : ""}`} onClick={()=>setShowModal(prev => !prev)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="edit-form">
            <input 
                className="input-field padding-xs" 
                type="text" 
                placeholder="Title"
                onChange={(e)=>setEditNote((prev) => ({...prev,title:e.target.value}))}
                value={editNote.title}
                required
            />
            <AiOutlineClose title="pin" className="pin-Icon icons-common" onClick={()=>setShowModal(prev => !prev)}/>
            <textarea 
                className="input-field padding-xs" 
                placeholder="write here..." 
                type="text" 
                rows="5" 
                cols="20"
                onChange={(e)=>setEditNote((prev) => ({...prev,body:e.target.value}))}
                value={editNote.body}
                required
            >
            </textarea>
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
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("portal")
  );
};
