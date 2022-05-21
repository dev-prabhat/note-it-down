import React,{createContext,useContext,useState,useEffect} from "react"
import toast from "react-hot-toast"
import { useAxios } from "../customHooks/"
import { useAuth } from "./Auth-Context"

const NoteContext = createContext()

const NoteProvider = ({children}) => {
  const getDate = () => new Date().getTime()
  const initialData = {
    title:"",
    body:"",
    tags:[],
    priority:"",
    color:"",
    date:getDate()
  }
  const initialEditData = {
    title:"",
    body:"",
    tags:[],
    priority:"",
    color:""
  }
  const {isLoaded:noteLoading,response,operation} = useAxios()
  const {encodedToken} = useAuth()
  const [notes, setNotes] = useState([])
  const [singleNote, setSingleNote] = useState(initialData)
  const [editNote,setEditNote] = useState(initialEditData)

  const addToNotes = (singleNote) => {
    if(singleNote.title.trim() !== "" && singleNote.body.trim() !== ""){
      operation({
        method:"post",
        url:"/api/notes",
        headers:{"authorization": encodedToken},
        data:{note:singleNote}
      })
      toast.success("Note added successfully",{duration:1000})
    }
    else toast.error("Invalid input",{duration:1000})
  } 

  const deleteNote = (_id) => {
    operation({
      method:"delete",
      url:`/api/notes/${_id}`,
      headers:{"authorization": encodedToken},
    })
    toast.success("Note remove successfully",{duration:1000})
  }

  const populateEditModal = (_id) => {
    const Object = notes.find(Obj => Obj._id === _id)
    setEditNote(Object)
  } 

  const updateNote = (updatedNote) => {
    if(updateNote.title.trim() !== "" && updateNote.body.trim() !== ""){
      operation({
        method:"post",
        url:`/api/notes/${updatedNote._id}`,
        headers:{"authorization": encodedToken},
        data:{note:updatedNote}
      })
      toast.success("Note edited successfully",{duration:1000})
    }
    else toast.error("Updation failed input",{duration:1000})
  }

  useEffect(()=>{
    if(response !== undefined) {
      setNotes(response.data.notes)
      setSingleNote(initialData)
      setEditNote(initialEditData)
    }
  },[response])


  return(
      <NoteContext.Provider 
      value={{
        notes,
        noteLoading,
        singleNote,
        editNote,
        setNotes,
        setSingleNote,
        addToNotes,
        deleteNote,
        populateEditModal,
        setEditNote,
        updateNote
        }}>
          {children}
      </NoteContext.Provider>
  )
}

const useNote = () => useContext(NoteContext)

export {NoteProvider,useNote}