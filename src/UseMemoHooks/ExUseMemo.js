import React, { useMemo, useState } from 'react'

const ExUseMemo = () => {
    const[add,setadd]=useState(0)
    const[state,setstate]=useState(false)
    
    const addition=()=>{
        setadd(add+1)
    }

    function count(add)
    {
        console.log("data",add)
        for(let i=0;i<=1000000000;i++);
       return add
    }

    let number=useMemo(()=>{
        // let number=count(add)
        return count(add)
},[add])

    // let number=count(add)

  return (
    <div>
       <button onClick={addition}>Addition</button>
       <h1>{number}</h1>

       <button onClick={()=>setstate(!state)}>please click</button>
       <h1>{state?"you clicked" :"please click"}</h1>
    </div>
  )
}

export default ExUseMemo
