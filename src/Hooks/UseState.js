import React, { useState } from 'react'

const UseState = () => {


// const namevarible=useState("abc")
//  const name=  namevarible[0]  //current value
//    const setName=  namevarible[1] //function if update it

//    const rollvarible=useState(101)
 
//   const roll=rollvarible[0]
//   const setRoll=rollvarible[1]

const[name,setName]=useState("abc")     //array destructing
const [roll,setRoll]=useState(101)


     const change=()=>{
        setName("xyz")
        setRoll(105)
      }
  return (
    <div>
 <h1>Name is:{name}</h1>
 <h1>Roll num is:{roll}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default UseState
