import { Header, NavBar,TrashNote } from "../../components/index"
import {useTrash} from "../../context"
import "../commonPage.css"
import "./trash.css"

export const Trash = () => {
    const {trashNotes} = useTrash()
    return(
        <>
         <main className="main-page">
           <Header/>
           <NavBar/>
           <div className="page-content">
                 <div className="trash-notes">
                     {
                         trashNotes && trashNotes.map(trashNote => (
                            <TrashNote key={trashNote.id} trashNote={trashNote}/>
                         ))
                     }
                 </div>
             </div>    
         </main>
        </>
    )
}