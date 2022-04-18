import React,{createContext,useContext,useState,useEffect} from "react"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState({title:"",body:"",label:""})

  const handleSubmit = (e) => {
      e.preventDefault()
      setNotes(prev => [...prev,singleNote])
      setSingleNote({title:"",body:"",label:""})
  } 

  useEffect(()=>{
    localStorage.setItem("mynotes",JSON.stringify(notes))   
  },[notes])

  return(
      <NoteContext.Provider value={{singleNote,setSingleNote,handleSubmit}}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}