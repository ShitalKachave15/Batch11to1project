import React from 'react'

const Title = ({todo,data}) => {
    console.log(todo,data)
    console.log("to do function")
  return (
    <div>
      <h1> useCallback Hook</h1>
      {
        data.map((curval,index)=>{
            return <h1 key={index}>{curval+index}</h1>
        })
      }
      <button onClick={todo}>Add todo</button>
    </div>
  )
}

export default Title
