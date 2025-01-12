

import React from 'react'
import ClassA from './ClassA'
import ClassC from './ClassC'

// const ClassB = ({name}) => {
//   return (
//     <div>
//       <ClassC name={name} />
//     </div>
//   )
// }

// export default ClassB


const ClassB = (props) => {
  return (
    <div>
      <ClassC name={props.name} />
    </div>
  )
}

export default ClassB

