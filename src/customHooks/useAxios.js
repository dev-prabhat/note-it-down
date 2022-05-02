import {useState} from "react"
import axios from "axios"

axios.defaults.baseURL = ""

export const useAxios = () => {
    const [isLoaded , setIsLoaded] = useState(false)
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState("")

    const operation = async (params) => {
       try {
           setIsLoaded(true)
           const result = await axios.request(params)
           setResponse(result)
       } catch (error) {
           setError(error)
       }finally{
           setIsLoaded(false)
       }
    }

    return {isLoaded,response,error,operation}
}