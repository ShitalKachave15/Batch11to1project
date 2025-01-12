
import React from "react"

const CureentDateTimeAss=()=>
{

    let curdate=new Date();
    curdate=curdate.toLocaleTimeString()

    return(
        <>
            <h1>hello {curdate}</h1>
        </>
    )
}

export default CureentDateTimeAss