import React,{createContext,useContext,useState,useEffect} from "react"
import { useAxios } from "../customHooks/useAxios"
import { useAuth } from "./Auth-Context"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const {response,operation} = useAxios()
  const {encodedToken} = useAuth()
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState({title:"",body:"",label:"",priority:""})
  const [editNote,setEditNote] = useState({title:"",body:"",label:"",priority:""})


  const handleSubmit = () => {
    operation({
      method:"post",
      url:"/api/notes",
      headers:{"authorization": encodedToken},
      data:{note:singleNote}
    })
  } 

  const deleteNote = (_id) => {
    operation({
      method:"delete",
      url:`/api/notes/${_id}`,
      headers:{"authorization": encodedToken},
    })
  }

  const populateEditModal = (_id) => {
    const Object = notes.find(Obj => Obj._id === _id)
    setEditNote(Object)
  } 

  const updateNote = (updatedNote) => {
    operation({
      method:"post",
      url:`/api/notes/${updatedNote._id}`,
      headers:{"authorization": encodedToken},
      data:{note:updatedNote}
    })
    setEditNote({title:"",body:"",label:"",priority:""})
  }

  const addFromArchive = (archiveNote) => setNotes(prev => [...prev,archiveNote])  


  useEffect(()=>{
    if(response !== undefined) {
      setNotes(response.data.notes)
    }
  },[response])


  return(
      <NoteContext.Provider value={{notes,singleNote,editNote,setSingleNote,handleSubmit,deleteNote,populateEditModal,setEditNote,updateNote,addFromArchive}}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}