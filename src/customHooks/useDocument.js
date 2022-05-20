import {useEffect} from 'react'

export const useDocument = (pageName) => {
   useEffect(()=>{
     document.title=`Note It Down ${pageName}`
   })
}

