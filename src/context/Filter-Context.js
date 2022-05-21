import React,{createContext,useReducer,useContext} from "react"
import { useNote } from "./Note-Context"

const FilterContext = createContext()

const FilterProvider = ({children}) => {
    const {notes} = useNote()
    const [filterState, filterDispatch ] = useReducer(filterReducer,{
        byTags:[],
        byDate:'',
        byPriority:[],
        search:""
    })

    function filterReducer(state,action){
       switch(action.type){
           case "FILTER_BY_TAGS":
               return{
                   ...state,
                   byTags:[...state.byTags,action.payload]
               }
            case "REMOVE_FROM_TAGS":
                return{
                    ...state,
                    byTags:state.byTags.filter(ele => ele !== action.payload)
                }
            case "FILTER_BY_PRIORITY":
                return{
                    ...state,
                    byPriority:[...state.byPriority,action.payload]
                }
            case "REMOVE_FROM_PRIORITY":
                return{
                    ...state,
                    byPriority:state.byPriority.filter(ele => ele !== action.payload)
                }
            case "SORT_BY_DATE":
                return{
                    ...state,
                    byDate:action.payload
                }
            case "SEARCH":
                return{
                    ...state,
                    search:action.payload
                }
            case "CLEAR_ALL":
                return{
                    byTags:[],
                    byDate:'',
                    byPriority:[]
                }
            default:
              return state
       }
    }

    const filteredNotes = () => {
        let filterNotes = [...notes]
        const {byTags,byPriority,byDate,search} = filterState

        if(byDate){
            filterNotes = filterNotes.sort((a,b)=>{
                return byDate === "NEW_TO_OLDER" ? a.date - b.date : b.date - a.date
            })
        }

        if(byTags.length > 0){
            filterNotes = filterNotes.filter(note => note.tags.some(i => byTags.includes(i.value)))
        }

        if(byPriority.length > 0){
            filterNotes = filterNotes.filter(note => byPriority.includes(note.priority))
        }

        filterNotes = filterNotes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
        return filterNotes
    }

    return(
        <FilterContext.Provider value={{filterState,filterDispatch,filteredNotes}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export {FilterProvider,useFilter}