import React, { Component } from 'react'
import Marks from './Marks'

export default class Student extends Component {
  render() {
    console.log("render the student component")
    return (
      <div>
        <h1>{this.props.name}</h1>
       <Marks/>
      </div>
    )
  }
}
