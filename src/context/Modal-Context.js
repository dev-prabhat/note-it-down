import React,{createContext,useContext,useState} from "react"

const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [isInputModal, setInputModal] = useState(false)
    const [isEditModal, setEditModal] = useState(false)


    return(
        <ModalContext.Provider value={{isInputModal,setInputModal,isEditModal,setEditModal}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => useContext(ModalContext)

export {ModalProvider,useModal}