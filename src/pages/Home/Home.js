import { MdCreate } from "react-icons/md";
import {Header, InputForm, NavBar,SingleNote,Modal,EditForm} from "../../components"
import {useNote,useModal} from "../../context"
import "../commonPage.css"
import "./home.css"

export const Home = () => {
    const {notes} = useNote()
    const {isInputModal,setInputModal,isEditModal,setEditModal} = useModal()
    return(
        <>
         <main className="main-page">
             <Header/>
             <NavBar/>
             <div className="page-content padding-xs">
                <Modal showModal={isInputModal} setShowModal={setInputModal}>
                    <InputForm  setInputModal={setInputModal}/>
                </Modal>
              <div className="all-notes">
                  {
                      notes.map(note => (
                          <SingleNote key={note._id} note={note} setEditModal={setEditModal}/>
                      ))
                  }
              </div> 
                 <Modal showModal={isEditModal} setShowModal={setEditModal}>
                    <EditForm  setEditModal={setEditModal}/>
                </Modal>
                <div className="create-note-container">
                    <MdCreate className="create-note-icon" onClick={()=>setInputModal(isInputModal =>!isInputModal)}/>
                </div>
             </div>
         </main>
        </>
    )
} 