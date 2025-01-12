import React, { useContext } from 'react'
import { Firstname } from './ContextApiEx'

const CompC = () => {
  const name=useContext(Firstname)
  return (
    <div>
       <h1>hello {name}</h1>
    {/* <Firstname.Consumer>
    {(fname)=>{
     
        return  <h1>My name is {fname}</h1>
    }
    }
       </Firstname.Consumer> */}
    </div>
  )
}

export default CompC
