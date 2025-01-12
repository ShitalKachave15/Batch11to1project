// useCallback() hook return memoized function

import React, { useCallback, useState } from 'react'
import Title from './Title'

const CallBackEx = () => {
    const[add,setadd]=useState(0)
    const[data,setData]=useState([])

//     const todos=()=>{
// setData((pre)=>[...pre,"new to do"])
//     }


const todos= useCallback(()=>{
        setData((pre)=>[...pre,"new to do"])
    },[data ])

  return (
    <>
        <Title todo={todos} data={data}/>
        <br/>
        <button onClick={()=>setadd(add+1)}>Addition</button>
     
        <h1>{add}</h1>
    </>
  )
}

export default CallBackEx
