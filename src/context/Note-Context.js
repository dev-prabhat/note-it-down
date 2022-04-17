import React,{createContext,useContext,useState} from "react"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState({title:"",body:""})

  const handleSubmit = (e) => {
      e.preventDefault()
      setNotes(prev => [...prev,singleNote])
      setSingleNote({title:"",body:""})
  } 
  console.log(notes)

  return(
      <NoteContext.Provider value={{singleNote,setSingleNote,handleSubmit}}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}