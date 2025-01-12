import React from 'react'

const TernaryOpe = () => {
    let num=-3

  return (
    <div>
      {num>=0 ? <h1>num is positive</h1> : <h1>no is negative</h1>}
    </div>
  )
}

export default TernaryOpe
