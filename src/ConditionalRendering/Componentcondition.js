
import React from 'react'

const Myfun=()=>{
    let age=20;
    if(age>=18)
{
    return(
<h1>you are eligibal for vote</h1>
    )
}   
else{
    return(
        <h1> your are not eligibal for vote</h1>
            )
}  
}
const Componentcondition = () => {
  return (
    <div>
     <Myfun/>
    </div>
  )
}

export default Componentcondition
