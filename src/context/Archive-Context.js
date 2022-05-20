import { useAxios } from "../customHooks/useAxios"
import { useAuth } from "./Auth-Context"
import { useNote } from "./Note-Context"
import React,{createContext,useContext,useState,useEffect} from "react"

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
    }

    const deleteFromArchive = (archiveNote) => {
      deleteOperation({
        method:"delete",
        url:`/api/archives/delete/${archiveNote._id}`,
        headers:{"authorization": encodedToken},
      })
    }

    const restoreFromArchive = (archiveNote) => {
      operation({
        method:"post",
        url:`/api/archives/restore/${archiveNote._id}`,
        headers:{"authorization": encodedToken}
      })
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