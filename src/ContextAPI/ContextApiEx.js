// React Context api allows you to easily access data at different levels of the component TreeWalker,without passing props to every level
// 1.createContext
// 2.you need provider
// 3.you need to consumer

import React, { createContext } from 'react'
import CompA from './CompA';


const Firstname=createContext();

const ContextApiEx = () => {
  return (
    <div>
    
    <Firstname.Provider value={"abc"}>
    
 <CompA/>
    </Firstname.Provider>
  
    </div>
  )
}

export default ContextApiEx
export {Firstname}
