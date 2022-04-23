import React,{createContext,useContext,useState} from "react"

const ArchiveContext = createContext()

const ArchiveProvider = ({children}) => {
    const [archiveNotes, setArchiveNote] = useState([])

    const addToArchive = (archiveNote) => setArchiveNote(prev => [...prev,archiveNote])

    const deleteFromArchive = (archiveNote) => setArchiveNote(prev => prev.filter(archiveNoteObj => archiveNoteObj.id !== archiveNote.id))
    
    return(
        <ArchiveContext.Provider value={{archiveNotes,addToArchive,deleteFromArchive}}>
          {children}
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext)

export {ArchiveProvider,useArchive}