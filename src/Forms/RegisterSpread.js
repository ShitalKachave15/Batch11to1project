import React, { useState } from 'react'

const RegisterSpread = () => {

 const[fullname,setFullName]=useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        dob:''
    })
    const inputevent=(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)
// const value=event.target.value
// const name=event.target.name
const{name,value}=event.target
setFullName((prevValue)=>{
 console.log(prevValue)
return{
    ...prevValue,
    [name]:value
}
    // if(name==='fname')
    // {
    //    return{
    //     fname:value,
    //     lname:prevValue.lname,
    //     email:prevValue.email,
    //     phone:prevValue.phone
    //    }
    // }
    // else if(name==='lname')
    //     {
    //        return{
    //         fname:prevValue.fname,
    //         lname:value,
    //          email:prevValue.email,
    //          phone:prevValue.phone
    //        }
    //     }
    //     else if(name==='email')
    //         {
    //            return{
    //             fname:prevValue.fname,
    //             lname:prevValue.lname,
    //             email:value,
    //             phone:prevValue.phone
    
                
    //            }
    //         }
    //         else if(name==='phone')
    //             {
    //                return{
    //                 fname:prevValue.fname,
    //                 lname:prevValue.lname,
    //                 email:prevValue.email,
    //                 phone:value
        
    //                }
    //             }
    
    
    })
            
        }
    
    const onsubmit=(event)=>{
        event.preventDefault();
    console.log("submit")
    alert("form submitted")
  

        }

  return (
    <div>
       <form onSubmit={onsubmit}>
      <h1> hello {fullname.fname} {fullname.lname} 
      </h1>
      <p>{fullname.email} {fullname.phone} {fullname.dob}</p>
        <input type='text' placeholder='Enter your first name' name='fname'
         onChange={inputevent} value={fullname.fname}/><br/><br/>
        <input type='text' placeholder='Enter your last name' name='lname' onChange={inputevent} value={fullname.lname}/><br/><br/>
        <input type='email' placeholder='Enter your email' autoComplete='off' name='email' onChange={inputevent} value={fullname.email}/><br/><br/>
        <input type='phone' placeholder='Enter your mobileno' name='phone' onChange={inputevent} value={fullname.phone}/><br/><br/>
        <input type='dob' placeholder='Enter your date of birth' name='dob' onChange={inputevent} value={fullname.dob}/><br/><br/>
        <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterSpread
