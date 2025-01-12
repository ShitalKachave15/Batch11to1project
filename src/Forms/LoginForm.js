import React, { useState } from 'react'

const LoginForm = () => {
    const[name,setName]=useState("")
    const[lastname,setlastname]=useState("")
     const[fullname,setfullname]=useState()
     const [lfullname,setlfullname]=useState()


     const changeevent=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
        
    }

  const onsubmit=(event)=>{
    event.preventDefault();
console.log("submit")
setfullname(name)
setlfullname(lastname)


    }

    const inputEventTwo=(event)=>{
        console.log(event.target.value)
        setlastname(event.target.value)  
    }

  return (
    <div>
      <form onSubmit={onsubmit}>
      <br/>
      <h1>Login {fullname} {lfullname}</h1>
        <input type='text' placeholder='enter username' onChange={changeevent}  value={name}/><br/>
        <br/>
        <input type='text' placeholder='enter lastname' onChange={inputEventTwo} value={lastname}/><br/><br/>
<button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default LoginForm
