import ReactLoading from 'react-loading';
import { useArchive , useNote , useAuth} from '../../context';
import "./loading.css"

export const Loading = () => {
    const {isLoaded,deleteLoading} = useArchive()
    const {authLoading} = useAuth()
    const {noteLoading} = useNote()

    if(!isLoaded && !deleteLoading && !authLoading && !noteLoading) return null
    return(
        <div className='loading__wrapper'>
             {isLoaded && <ReactLoading className='loading' type={"bars"} color={"#fac6c8"}/>}
             {deleteLoading && <ReactLoading className='loading' type={"bars"} color={"#fac6c8"}/>}
             {noteLoading && <ReactLoading className='loading' type={"bars"} color={"#fac6c8"}/>}
             {authLoading && <ReactLoading className='loading' type={"bars"} color={"#fac6c8"}/>}
        </div>
    )
}