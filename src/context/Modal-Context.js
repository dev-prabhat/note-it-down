import React,{createContext,useContext,useState} from "react"

const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)

    return(
        <ModalContext.Provider value={{showModal,setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => useContext(ModalContext)

export {ModalProvider,useModal}