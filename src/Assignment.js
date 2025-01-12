import React from "react"

function Assignment()
{

    let fname="sdgsa"
    let cuDAte= new Date().toLocaleDateString()
    let cuTime=new Date().toLocaleTimeString()
    

    return(
        <>
            <h1>Name {fname}</h1>
              <h1>Date{cuDAte} </h1>
              <h1>Time {cuTime}</h1>
        </>
    )
}

export default Assignment