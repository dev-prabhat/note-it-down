import React,{createContext,useState,useContext} from "react"

const TrashContext = createContext()

const TrashProvider = ({children}) => {
    const [trashNotes, setTrashNote] = useState([])

    const moveToTrash = (trashNote) =>  setTrashNote(prev => [...prev,trashNote])

    const deleteFromTrash = (trashNoteId) => setTrashNote(prev => prev.filter(trashNoteObj => trashNoteObj._id !== trashNoteId))

    return(
        <TrashContext.Provider value={{trashNotes,moveToTrash,deleteFromTrash}}>
          {children}
        </TrashContext.Provider>
    )
} 

const useTrash = () => useContext(TrashContext)

export {TrashProvider,useTrash }