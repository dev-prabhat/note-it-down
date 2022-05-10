import React from "react"
import "./colorPalette.css"

const palette = [
    {color:"#fecaca",className:"bg-red"},
    {color:"#e0f2fe",className:"bg-blue"},
    {color:"#bbf7d0",className:"bg-green"},
    {color:"#fef9c3",className:"bg-yellow"},
    {color:"#f5d0fe",className:"bg-purple"},
    {color:"#95959b",className:"bg-gray"}
]



export const ColorPalette = ({isColorPalette,setBgColor,setIsColorPalette}) => {

    const clickHandle = (color) => {
        setBgColor((prev) => ({...prev,color:color}))
        setIsColorPalette(prev => !prev)
    }

    if(isColorPalette === false) return null
    return(
        <> 
          <div className="color-palette-container padding-xs border-radius-xs">
            {
                palette.map(c => (
                    <div className={c.className} key={c.color} onClick={()=>clickHandle(c.color)}></div>
                ))
            }
          </div>
        </>
    )
}