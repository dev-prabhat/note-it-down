import React from "react"
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./modal.css";

export const Modal = ({showModal,setShowModal,children}) => {
  const nodeRef = React.useRef(null)

  return ReactDOM.createPortal(
    <CSSTransition nodeRef={nodeRef} in={showModal} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div ref={nodeRef} className={`modal-wrapper ${showModal ? "show" : ""}`} onClick={()=>setShowModal(showModal =>!showModal)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("portal")
  );
};
