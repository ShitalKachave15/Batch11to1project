import React from 'react'
import CompB from './CompB'

const CompA = () => {
  let test="sfs"
  return (
    <div>
      <h1>My name is react {test}</h1>
      <CompB/>
    </div>
  )
}

export default CompA
