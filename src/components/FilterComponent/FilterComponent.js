import React from "react"
import { useFilter } from "../../context";
import { AiOutlineClose } from "react-icons/ai";
import "./FilterComponent.css"

const options = [
    { value: 'work', label: 'Work' },
    { value: 'exercise', label: 'Exercise' },
    { value: 'health', label: 'Health' },
    { value: "collage", label: "Collage"},
    { value: "teams", label: "Teams"},
    { value: "chores", label:"Chores"},
    { value: "creativity", label:"Creativity"},
]

const priorities = [
    {id:1,value:"High"},
    {id:2,value:"Medium"},
    {id:3,value:"Low"}
]

const sort = [
    {value:"NEW_TO_OLDER",label:"New to Old"},
    {value:"OLDER_TO_NEW",label:"Old to new"},
]

export const FilterComponent = ({setFilterModal}) => {
    const {filterState,filterDispatch} = useFilter()
    const {byTags,byPriority,byDate} = filterState

    const clickHandler = (value) => {
       let index = byTags.findIndex(tag => tag === value)
       if(index === -1) filterDispatch({type:"FILTER_BY_TAGS",payload:value})
       else filterDispatch({type:"REMOVE_FROM_TAGS",payload:value})
    }

    const priorityHandler = (value) => {
      let index = byPriority.findIndex(priority => priority === value)
      if(index === -1) filterDispatch({type:"FILTER_BY_PRIORITY",payload:value})
      else filterDispatch({type:"REMOVE_FROM_PRIORITY",payload:value})
    }

    return(
        <div className="filter-wrapper padding-xs">
            <form>
                <h2 className="head-sm">Filter by Tags</h2>
                {
                    options.map(option => (
                        <div key={option.value}>
                            <input 
                                type="checkbox" 
                                id={option.value}
                                onChange={()=>clickHandler(option.value)}
                                checked={byTags.includes(option.value)}
                            />
                            <label className="margin-xs" htmlFor={option.value}>{option.label}</label>
                        </div>
                    ))
                }
                <h2 className="head-sm">Filter by Priority</h2>
                {
                    priorities.map(priority => (
                        <div key={priority.id}>
                            <input 
                                type="checkbox"
                                id={priority.value}
                                onChange={()=>priorityHandler(priority.value)}
                                checked={byPriority.includes(priority.value)}
                                />
                            <label className="margin-xs" htmlFor={priority.value}>{priority.value}</label>
                        </div>
                    ))
                }
                <h2 className="head-sm">Sort by Date</h2>
                    {
                        sort.map(sortOption => (
                            <div key={sortOption.value}>
                                <input
                                   type="radio"
                                   id={sortOption.value}
                                   onChange={()=>filterDispatch({type:"SORT_BY_DATE",payload:sortOption.value})}
                                   checked={byDate === sortOption.value}
                                />
                                <label className="margin-xs" htmlFor={sortOption.value}>{sortOption.label}</label>
                            </div>
                        ))
                    }
            </form>
            <AiOutlineClose
              title="close" 
              className="close-Icon icons-common" 
              onClick={()=>setFilterModal(prev => !prev)} 
            />
        </div>
    )
}