import {Header, InputForm, NavBar,SingleNote,Modal} from "../../components"
import {useNote} from "../../context/Note-Context"
import "../commonPage.css"
import "./home.css"

export const Home = () => {
    const {notes} = useNote()
    return(
        <>
         <main className="main-page">
             <Header/>
             <NavBar/>
             <div className="page-content padding-xs">
              <InputForm/>
              <div className="all-notes padding-xs">
                  {
                      notes.map(note => (
                          <SingleNote key={note._id} note={note}/>
                      ))
                  }
              </div>
             </div>
             <Modal/>
         </main>
        </>
    )
} 