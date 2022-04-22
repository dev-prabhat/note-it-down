import { Header, NavBar,ArchiveNote} from "../../components/index"
import {useArchive} from "../../context"
import "../commonPage.css"
import "./archive.css"


export const Archive = () => {
    const {archiveNotes} = useArchive()
    return(
        <>
         <main className="main-page">
            <Header/>
            <NavBar/>
             <div className="page-content">
                 <div className="archive-notes">
                     {
                         archiveNotes && archiveNotes.map(archiveNote => (
                            <ArchiveNote key={archiveNote.id} archiveNote={archiveNote}/>
                         ))
                     }
                 </div>
             </div>
         </main>
        </>
    )
}