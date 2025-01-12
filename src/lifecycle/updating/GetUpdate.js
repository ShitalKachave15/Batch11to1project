import React, { Component } from 'react'
import SubComp from './SubComp'

export default class GetUpdate extends Component {
    constructor() {
        super()

        this.state={
            roll:101
        }
        
    }

    Handles=()=>
    {
        console.log("button click")
         this.setState({
            // roll:102
            roll:this.state.roll+2}
         )

    }
  render() {
    console.log("get update component")
    return (
      <div>
        
  {/* <h1>{this.state.roll}</h1> */}

  <SubComp roll={this.state.roll}/>
  <button onClick={this.Handles}>change</button>
      </div>
    )
  }
}
