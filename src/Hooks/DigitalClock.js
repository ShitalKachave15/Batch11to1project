import React, { useState } from 'react'

const DigitalClock = () => {
    let time=new Date().toLocaleTimeString();

    const[ctime,setCtime]=useState(time)


    const ChangeTime=()=>{

        let  Newtime=new Date().toLocaleTimeString();
          setCtime(Newtime)
     }

     setInterval(ChangeTime,2000)
  return (
    <div>
      <h1>{ctime}</h1>
   
    </div>
  )
}

export default DigitalClock
