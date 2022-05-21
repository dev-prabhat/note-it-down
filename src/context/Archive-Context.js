import React,{createContext,useContext,useState,useEffect} from "react"
import toast from "react-hot-toast"
import { useAxios } from "../customHooks"
import { useAuth } from "./Auth-Context"
import { useNote } from "./Note-Context"


const ArchiveContext = createContext()

const ArchiveProvider = ({children}) => {
    const {encodedToken} = useAuth()
    const {setNotes} = useNote()
    const {isLoaded,response,operation} = useAxios()
    const {isLoaded:deleteLoading,response:deletedData,operation:deleteOperation} = useAxios()
    const [archiveNotes, setArchiveNote] = useState([])

    const addToArchive = (archiveNote) => {
      operation({
        method:"post",
        url:`/api/notes/archives/${archiveNote._id}`,
        headers:{"authorization": encodedToken},
        data:{note:archiveNote}
      })
      toast.success("Added to archive successfully",{duration:1000})
    }

    const deleteFromArchive = (archiveNote) => {
      deleteOperation({
        method:"delete",
        url:`/api/archives/delete/${archiveNote._id}`,
        headers:{"authorization": encodedToken},
      })
      toast.success("Deleted from archive successfully",{duration:1000})
    }

    const restoreFromArchive = (archiveNote) => {
      operation({
        method:"post",
        url:`/api/archives/restore/${archiveNote._id}`,
        headers:{"authorization": encodedToken}
      })
      toast.success("Restore from archive successfully",{duration:1000})
    }
    
    useEffect(()=>{
      if(deletedData !== undefined){
        const {archives} = deletedData.data
        setArchiveNote(archives)
      }
    },[deletedData])

    useEffect(()=>{
      if(response !== undefined){
        const {archives,notes} = response.data
        setArchiveNote(archives)
        setNotes(notes)
      }
    },[response])

    return(
        <ArchiveContext.Provider 
        value={{
          archiveNotes,
          isLoaded,
          addToArchive,
          deleteLoading,
          deleteFromArchive,
          restoreFromArchive
        }}>
          {children}
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext)

export {ArchiveProvider,useArchive}