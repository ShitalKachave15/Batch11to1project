import React, { useState } from 'react'

const Register = () => {
    //  const[name,setName]=useState("")
    //     const[lastname,setlastname]=useState("")
    //      const[fullname,setfullname]=useState()
    //      const [lfullname,setlfullname]=useState()
    
    
     const[fullname,setFullName]=useState({
            fname:'',
            lname:'',
            email:'',
            phone:''
        })

        
        const changeevent=(event)=>{
            console.log(event.target.value)
            console.log(event.target.name)
    // const value=event.target.value
    // const name=event.target.name
    const{value,name}=event.target
    
    setFullName((prevValue)=>{
    // console.log(prevValue.fname)
    if(name==='fname')
    {
       return{
        fname:value,
        lname:prevValue.lname,
        email:prevValue.email,
        phone:prevValue.phone
       }
    }
    else if(name==='lname')
        {
           return{
            fname:prevValue.fname,
            lname:value,
             email:prevValue.email,
             phone:prevValue.phone
           }
        }
        else if(name==='email')
            {
               return{
                fname:prevValue.fname,
                lname:prevValue.lname,
                email:value,
                phone:prevValue.phone
    
                
               }
            }
            else if(name==='phone')
                {
                   return{
                    fname:prevValue.fname,
                    lname:prevValue.lname,
                    email:prevValue.email,
                    phone:value
        
                   }
                }
    
    
    })
            
        }
    
      const onsubmit=(event)=>{
        event.preventDefault();
    console.log("submit")
    alert("submitted")

        }
    
      
  return (
    <div>
        <form onSubmit={onsubmit}>
      <br/>
      <h1>Login {fullname.fname}  {fullname.lname} {fullname.email} </h1>
      <p>{fullname.email}</p>
        <input type='text' placeholder='enter username' onChange={changeevent}  value={fullname.fname} name='fname'/><br/>
        <br/>
        <input type='text' placeholder='enter lastname' onChange={changeevent} value={fullname.lname} name='lname'/><br/><br/>

        <input type='text' placeholder='enter email' onChange={changeevent} value={fullname.email} name='email'/><br/><br/>
        <input type='phone' placeholder='enter phone no' onChange={changeevent} value={fullname.phone} name='phone'/><br/><br/>
<button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Register
