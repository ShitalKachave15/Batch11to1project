import React from 'react'

const ElementVariable = () => {

    let num=4
    let res;

    if(num>=0)
    {
          res=<h1>no is positive</h1>
    }
    else{
        res=<h1>no is negtive</h1>
    }
  return (
    <div>
      <h1> resault is {res}</h1>
    </div>
  )
}

export default ElementVariable
