import { MdCreate ,MdFilterList} from "react-icons/md";
import {Header, InputForm, NavBar,SingleNote,Modal,EditForm,FilterComponent} from "../../components"
import {useModal,useFilter} from "../../context"
import {useDocument} from "../../customHooks";
   
import "../commonPage.css"
import "./home.css"

export const Home = () => {
    useDocument("| Home")

    const {filteredNotes} = useFilter()
    const {isInputModal,setInputModal,isEditModal,setEditModal,isFilterModal,setFilterModal} = useModal()
    return(
        <>
         <main className="main-page">
             <Header/>
             <NavBar/>
             <div className="page-content padding-xs">
                <Modal showModal={isInputModal} setShowModal={setInputModal}>
                    <InputForm  setInputModal={setInputModal}/>
                </Modal>
                <Modal showModal={isFilterModal} setShowModal={setFilterModal}>
                   <FilterComponent setFilterModal={setFilterModal}/>
                </Modal>
              <div className="all-notes">
                  {
                      filteredNotes().map(note => (
                          <SingleNote key={note._id} note={note} setEditModal={setEditModal} isHomePage={true}/>
                      ))
                  }
              </div> 
                 <Modal showModal={isEditModal} setShowModal={setEditModal}>
                    <EditForm  setEditModal={setEditModal}/>
                </Modal>
                <div className="filter-icon__wrapper">
                    <MdFilterList className="filter-icon" onClick={()=>setFilterModal(isFilterModal => !isFilterModal)}/>
                </div>
                <div className="create-icon__wrapper">
                    <MdCreate className="create-icon" onClick={()=>setInputModal(isInputModal =>!isInputModal)}/>
                </div>
             </div>
         </main>
        </>
    )
} 