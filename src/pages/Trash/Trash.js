import { Link } from "react-router-dom"
import { Header, NavBar, SingleNote} from "../../components/index"
import {useTrash} from "../../context"
import {useDocument} from "../../customHooks"
import "../commonPage.css"
import "./trash.css"

export const Trash = () => {
    useDocument("| Trash")
    const {trashNotes} = useTrash()
    return(
        <>
         <main className="main-page">
           <Header/>
           <NavBar/>
           <div className="page-content padding-xs">
               {
                   trashNotes.length === 0 && <div className="text-center">
                   <h1 className="text-gray empty-message"> 
                      This is empty Go to <Link to="/home" className="highlight">Home</Link> 
                   </h1>
                 </div>
               }
                 <div className="trash-notes">
                     {
                         trashNotes && trashNotes.map(trashNote => (
                            <SingleNote key={trashNote._id} note={trashNote} isTrashPage={true}/>
                         ))
                     }
                 </div>
             </div>    
         </main>
        </>
    )
}