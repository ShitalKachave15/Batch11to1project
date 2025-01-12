
import React from 'react'
import smile from '../image/smile.png'
import happy from '../image/happy.jpg'
import sad from '../image/sad.jpg'
import './Test.css'


// const SlotM=( )=>{
//     let x="X"
//     let y="X"
//     let z="X"

//     if((x===y)&& (y===z))
//     {
//         return(
//             <>
//                 <div className=''>
//                     <h1>{" "} 
//                     {x} {y} {z}</h1>
//                     <h1>This is matching</h1>
//                     <hr></hr>
//                 </div>
//             </>
//         )
//     }
//     else{
//         return(
//             <>
//                 <div className=''>
//                     <h1>{" "} 
//                     {x} {y} {z}</h1>
//                     <h1>This is not matching</h1>
//                     <hr></hr>
//                 </div>
//             </>
//         )
//     }

// }
const SlotM=(props)=>{
    // let x="X"
    // let y="X"
    // let z="X"

    let x=props.x
    let y=props.y
    let z=props.z
    if((props.x===props.y)&& (props.y===props.z))
    {
        return(
            <>
             
                <div className='ass'>
                    {/* <h1>{" "} 
                    {x} {y} {z}</h1> */}
                     <h1>{" "} 
                    {x} {y} {z}</h1>
                    <h1>This is matching</h1>
                    <hr></hr>
                </div>
              
            </>
        )
    }
    else{
        return(
            <>
               
               <div className='ass'>
                    <h1>{" "} 
                    {x} {y} {z}</h1>
                    <h1>This is not matching</h1>
                    <hr></hr>
                </div>

               
            </>
        )
    }

}
const Test = () => {
  return (
    <div>
      <h1> Welcome to <span >Slot machine game</span>
      </h1>
   {/* <SlotM />
   <SlotM/>
   <SlotM/> */}
  <div className='main'>
  <div className='test'>
  <SlotM  x='A' y='B' z='C'/>
   <SlotM x='U' y='U' z='U'/>
   <SlotM x='A' y='B' z='C'/>
  </div>
  </div>
  

    </div>
  )
}

export default Test
