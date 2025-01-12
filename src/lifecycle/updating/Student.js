import React, { Component } from 'react'
import Marks from './Marks'

export default class Student extends Component {
    constructor()
    {
        super()
        this.state={
            roll:101
        }
    }


    handle=()=>{
        console.log("button click")

        // this.setState({roll:102})
        this.setState({roll:this.state.roll+2})
    }
  render() {
    console.log("student render")
    return (
      <div>
        <Marks roll={this.state.roll}/>
        <button onClick={this.handle}>change</button>
      </div>
    )
  }
}
