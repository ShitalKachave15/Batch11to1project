


import React from 'react'
import ClassB from './ClassB'

export default function ClassA(props) {
  console.log(props)
  return (
    <div>
     {/* <h1> {props.name}</h1> */}
    <ClassB name={props.name}/>  
    </div>
  )
}


// export default function ClassA({name}) {
//   // console.log(props)
//   return (
//     <div>
//      {/* <h1> {props.name}</h1> */}
//     <ClassB name={name}/>  
//     </div>
//   )
// }