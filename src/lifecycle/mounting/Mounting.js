import React, { Component } from 'react'
import Student from './Student';

export default class Mounting extends Component {
    constructor(props){
        super(props);
        console.log("Constructor called")

        this.state={
            id:"101",
            name:"abc",
            data:this.props.data
        }
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state)
        return null
    }


    componentDidMount(){
        console.log("componentDidMount")
    }

  render() {

    console.log("render the method")
    return (
      <div>
      <h1>Hello Classs {this.state.id} </h1>
      <Student name="xyz"/>
      </div>
    )
  }
}
