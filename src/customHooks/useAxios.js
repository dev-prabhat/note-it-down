import toast from "react-hot-toast"
import {useState} from "react"
import axios from "axios"

axios.defaults.baseURL = ""

export const useAxios = () => {
    const [isLoaded , setIsLoaded] = useState(false)
    const [response, setResponse] = useState(undefined)
    

    const operation = async (params) => {
       try {
           setIsLoaded(true)
           const result = await axios.request(params)
           setResponse(result)
       } catch (error) {
        toast.error(error.response.data.message,{duration:1000})
       }finally{
           setIsLoaded(false)
       }
    }

    return {isLoaded,response,operation}
}