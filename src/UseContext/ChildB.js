import React, { useContext } from 'react'
import ChildC from './ChildC'
import {  FirstName, Lname, Mname } from './Main'

const ChildB = () => {
//     const fname=useContext(FirstName)
//   const mname=useContext(Mname)
//   const lname=useContext(Lname)

  return (
    <div>
 {/* <h1>First name value is: {fname}</h1>
        <h1>Middle name value is: {mname}</h1>
        <h1>Last name value is: {lname}</h1> */}
      <ChildC/>
    </div>
  )
}

export default ChildB
