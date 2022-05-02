import { Header, NavBar,SingleNote} from "../../components/index"
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
             <div className="page-content padding-xs">
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