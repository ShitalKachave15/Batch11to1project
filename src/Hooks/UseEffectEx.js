import React, { useEffect, useState } from 'react'

function UseEffectEx() {

    const [count,setCount]=useState(5)
    const [count1,setCount1]=useState(50)


const inc=()=>{
    setCount(count+1)
}
const dec=()=>{
    setCount1(count1-1)
}
useEffect(()=>{
    console.log("update for increment")
},[count])
useEffect(()=>{
    console.log("update for decrement")
},[count1])
  return (
    <div>
      <h1>{count}</h1>


      <h1>{count1}</h1>
      <button onClick={inc}>click</button>
      <button onClick={dec}>click</button>
    </div>
  )
}

export default UseEffectEx
