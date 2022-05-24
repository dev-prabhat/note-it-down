import { Link } from "react-router-dom"
import { Header, NavBar,SingleNote} from "../../components/index"
import {useArchive} from "../../context"
import {useDocument} from "../../customHooks"
import "../commonPage.css"
import "./archive.css"


export const Archive = () => {
    useDocument("| Archive")
    const {archiveNotes} = useArchive()
    return(
        <>
         <main className="main-page">
            <Header/>
            <NavBar/>
             <div className="page-content padding-xs">
                 {
                     archiveNotes.length === 0 && <div className="text-center">
                     <h1 className="text-gray empty-message"> 
                        This is empty Go to <Link to="/home" className="highlight">Home</Link> 
                     </h1>
                   </div>
                 }
                 <div className="archive-notes">
                     {
                         archiveNotes && archiveNotes.map(archiveNote => (
                            <SingleNote key={archiveNote._id} note={archiveNote} isArchivePage={true}/>
                         ))
                     }
                 </div>
             </div>
         </main>
        </>
    )
}