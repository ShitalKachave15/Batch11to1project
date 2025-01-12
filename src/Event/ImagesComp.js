 import React from 'react'
import { Div } from '../calculatorex/Calculator'


const ImagesComp = () => {

    let design=
        {
            color:'red' ,
            background:'blue',
            border:"2px solid green",
            fontSize:"60px",
            textTransform:"uppercase",
            fontFamily: "Playwrite TZ Guides, cursive"
        }
            
    
  return (
    <div>
      <h1 style={design}>hello images component</h1>

      <i class="fa-solid fa-house"></i>
    </div>
  )
}

export default ImagesComp
