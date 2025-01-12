import React, { useState } from 'react'

const CurrentTime = () => {

    let time=new Date().toLocaleTimeString();
    const[ctime,setTime]=useState(time)

    const ChangeTime=()=>{

       let  Newtime=new Date().toLocaleTimeString();
         setTime(Newtime)
    }

  return (
    <div>
      <h1>{ctime}</h1>
      <button onClick={ChangeTime}>click</button>
    </div>
  )
}

export default CurrentTime
