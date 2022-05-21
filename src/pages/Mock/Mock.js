import React from "react"
import Mockman from "mockman-js"
import "./mock.css"
import {useDocument} from "../../customHooks"
export const Mock = () => {
    useDocument("| Mock")
    return(
        <div className="mock">
           <Mockman/>
        </div>
    )
} 