import React from 'react'


const ConditionEx = () => {
    // with if else
//     let age=10;
//     if(age>=18)
// {
//     return(
// <h1>you are eligibal for vote</h1>
//     )
// }   
// else{
//     return(
//         <h1> your are not eligibal for vote</h1>
//             )
// }  



//with element variable
let age=20;
let result;

if(age>=18)
{
    result=<h1>you can vote</h1>
}
else{
    result=<h1>you can't vote</h1>
}



return (
    <div>
      <h1> ConditionalRendering </h1>
      {result}
    </div>
  )
}

export default ConditionEx
