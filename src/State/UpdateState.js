import React, { Component } from 'react'

export default class UpdateState extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"rahul",
            id:this.props.id
            // id:"101"
        }
    }

    handleClick=()=>{
      this.setState({
        name:"updated name",
        id:"105"
      })
    
    }
  render() {
    return (
      <div>
        <div>
        <h1>hello </h1>
        <h1>hello, {this.state.name} your id is {this.state.id}</h1>
        <button onClick={this.handleClick}>update</button>
      </div>
      </div>
    )
  }
}
