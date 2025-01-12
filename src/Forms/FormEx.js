import React, { useState } from 'react'
import { use } from 'react';

function FormEx() {
    const[name,setName]=useState('')
    const[fullname,setfullname]=useState()
    // const inputeEvent=()=>{
    //     console.log("clicked");
    // }
    // const inputeEvent=(event)=>{
    //     console.log(event.target.value);
    // }

    const inputeEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value)
    }

    const onSubmit=()=>{
        setfullname(name);
    }
  return (
    <div>
    {/* <h1>Hello </h1> */}

    {/* <h1>Hello {name}</h1> */}
    <h1>Hello {fullname}</h1>
      {/* <input type='text' placeholder='enter your name' value=""/><br> */}
      {/* <input type='text' placeholder='enter your name' defaultValue value=""/> */}
      <input type='text' placeholder='enter your name' onChange={inputeEvent} value={name}/>
      <br/>


  
      <br/>
      <button onClick={onSubmit}>click me</button>
    </div>
  )
}

export default FormEx
