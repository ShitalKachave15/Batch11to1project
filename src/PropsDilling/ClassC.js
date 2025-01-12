import React from 'react'
import ClassB from './ClassB'

// const ClassC = ({name}) => {
//   return (
//     <div>
//    <h1>child c data: {name}</h1>
//     </div>
//   )
// }

// export default ClassC

const ClassC = (props) => {
  return (
    <div>
   <h1>child c data: {props.name}</h1>
    </div>
  )
}

export default ClassC
