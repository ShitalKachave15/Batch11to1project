import React, { Component } from 'react'

export default class SubComp extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            sroll:this.props.roll
            
        }
        console.log(this.state)
    }
   

    // static getDerivedStateFromProps(props,state)
    // {
    //     console.log("mount getDerivedStateFromProps ")
    //     console.log(props,state)
    // }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state)
        console.log("get derived state from props")
        if(props.roll !==state.sroll)
        {
        return{sroll:props.roll}
        }
        else{
   return null
        }
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.state.sroll<107)
        {
            console.log("marks-should component update")
            console.log(nextProps,nextState)
            return true
        }
        else{
            return false
        }
    }

    getSnapshotBeforeUpdate(preprops,prestate)
    {
        console.log("sub-get snapshotbefore update")
        console.log(preprops,prestate)
        return 45
    }
    componentDidUpdate(preprops,prestate,snapshot)
    {
console.log("SUB- component did update")
console.log(preprops,prestate,snapshot)
    }
  render() {
    console.log("sub component render")
    return (
      <div>
     
      <h1>  {this.state.sroll}</h1>
      </div>
    )
  }
}
