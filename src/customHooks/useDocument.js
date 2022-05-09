import {useEffect} from 'react'

export default function useDocument(pageName) {
   useEffect(()=>{
     document.title=`Note It Down ${pageName}`
   })
}

