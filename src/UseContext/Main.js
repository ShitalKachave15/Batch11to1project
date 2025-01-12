import React, { createContext } from 'react'
import ChildA from './ChildA'


const FirstName=createContext()
const Mname=createContext()
const Lname=createContext()


const Main = () => {
  return (
    <div>
   <FirstName.Provider value={"firstname"}>
   <Mname.Provider value={"middle name"}>
   <Lname.Provider value={"Last name"}>
<ChildA/>
   </Lname.Provider>
   </Mname.Provider>
   </FirstName.Provider>

    </div>
  )
}

export default Main
export {FirstName,Lname,Mname}
