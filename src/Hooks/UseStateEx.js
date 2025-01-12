import React, { useState } from 'react'

function UseStateEx() {
    const nameSatetVariable=useState("data")
    const name=nameSatetVariable[0]
    const setName=nameSatetVariable[1]

    // nameSatetVariable[1]("updated")

    // const [name,setname]=useState("test")
    const [roll,setRoll]=useState(101)
    
    const change=()=>
    {

        setName("updated")
        setRoll(103)
        // nameSatetVariable[1]("updated")
        // setname("new")
    }
  return (
    <div>
    {/* <h1>{nameSatetVariable[0]}</h1> */}
    <h1>{name}</h1>
  
      <h1>
        name is: {name}
      </h1>
      
      <h1>
        roll num  is: {roll}
      </h1>
      <button onClick={change}>change </button>
    </div>
  )
}

export default UseStateEx
