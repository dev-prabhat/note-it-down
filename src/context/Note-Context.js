import {v4 as uuid} from "uuid"
import React,{createContext,useContext,useState,useEffect} from "react"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState({id:"", title:"",body:"",label:"",priority:""})
  const [editNote,setEditNote] = useState({id:"",title:"",body:"",label:"",priority:""})

  useEffect(()=>{
    let items = JSON.parse(localStorage.getItem("mynotes"))
    if(items.length !== 0) setNotes(items)
 },[])

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(Obj => Obj.id !== id))
  }

  const handleSubmit = () => {
      setNotes(prev => [...prev,{...singleNote,id:uuid()}])
      setSingleNote({id:"",title:"",body:"",label:"",priority:""})
  } 
  
  const handleEdit = (id) => {
    const Object = notes.find(Obj => Obj.id === id)
    setEditNote(Object)
  } 

  const updateNote = (updatedNote) => {
    setNotes(prevNotes => prevNotes.map(prevNote => {
      if(prevNote.id === updatedNote.id) return updatedNote
      return prevNote
    }))
    setEditNote({id:"",title:"",body:"",label:"",priority:""})
  }

  useEffect(()=>{
    localStorage.setItem("mynotes",JSON.stringify(notes))   
  },[notes])

  return(
      <NoteContext.Provider value={{notes,singleNote,editNote,setSingleNote,handleSubmit,deleteNote,handleEdit,setEditNote,updateNote}}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}