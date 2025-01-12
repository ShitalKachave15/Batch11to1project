import React from 'react'

const Test=()=>{
    let num=-9
    if(num>=0)
    {
        return(
            <h1>num is positive</h1>
        )
    }
    else{
        return(
            <h1>num is negative</h1>
        )
    }
}

const ComponetExIfelse = () => {
  return (
    <div>
      <Test/>
    </div>
  )
}

export default ComponetExIfelse
