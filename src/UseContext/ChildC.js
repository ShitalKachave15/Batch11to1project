import React, { useContext, useState } from 'react'
import {  FirstName, Lname, Mname } from './Main'

const ChildC = () => {
  const fname=useContext(FirstName)
  const mname=useContext(Mname)
  const lname=useContext(Lname)

    return (
        <div>
        <h1>First name value is: {fname}</h1>
        <h1>Middle name value is: {mname}</h1>
        <h1>Last name value is: {lname}</h1>
            {/* <FirstName.Consumer>
                {(fname) => {
                    return (
                        <Mname.Consumer>
                            {(mname) => {
                                return(
                                   <Lname.Consumer>
                                    {
                                        (lname)=>{

                                            return <h1> hello {fname} {mname} {lname}</h1>
                                        }
                                    }
                                   </Lname.Consumer>
                                )
                            
                            }
                            }
                        </Mname.Consumer>
                    )
                }
                }
            </FirstName.Consumer> */}

        </div>
    )
}

export default ChildC
