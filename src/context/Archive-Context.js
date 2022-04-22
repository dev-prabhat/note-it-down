import React,{createContext,useContext,useState} from "react"

const ArchiveContext = createContext()

const ArchiveProvider = ({children}) => {
    const [archiveNotes, setArchiveNote] = useState([])

    const addToArchive = (note) => setArchiveNote(prev => [...prev,note])

    
    return(
        <ArchiveContext.Provider value={{archiveNotes,addToArchive}}>
          {children}
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext)

export {ArchiveProvider,useArchive}