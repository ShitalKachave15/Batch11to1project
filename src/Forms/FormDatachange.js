import React, { useState } from 'react'

const FormDatachange = () => {
//    const name=useState("")
 const[name,setName]=useState("")
 const[fullname,setfullname]=useState()
//  console.log(name)
//  console.log(setName)
// const changeevent=()=>{
    //     console.log("click")
    // }

    const changeevent=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
        
    }

  const  onsumbit=()=>{
console.log("submit")
setfullname(name)
    }
  return (
    <div>
      {/* <h1>hello {name}</h1> */}
      <h1>Hello {fullname}</h1>
      {/* <input type='text' placeholder='Enter your name' defaultValue=""/><br/><br/> */}
      <input type='text' placeholder='Enter your name' onChange={changeevent} value={name} /><br/><br/>
      <button onClick={onsumbit} >click</button>
    </div>
  )
}

export default FormDatachange
