import React,{createContext,useContext,useState,useEffect} from "react"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState({id:"", title:"",body:"",label:""})


  const deleteNote = (id) => {
    setNotes(prev => prev.filter(Obj => Obj.id !== id))
  }


  const handleSubmit = (e) => {
      e.preventDefault()
      setNotes(prev => [...prev,singleNote])
      setSingleNote({id:"",title:"",body:"",label:""})
  } 

  useEffect(()=>{
    localStorage.setItem("mynotes",JSON.stringify(notes))   
  },[notes])



  return(
      <NoteContext.Provider value={{notes,singleNote,setSingleNote,handleSubmit,deleteNote}}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}