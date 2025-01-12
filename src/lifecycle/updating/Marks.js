import React, { Component } from 'react'

export default class Marks extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            mroll:this.props.roll
        }

    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state)
        console.log("get derived state from props")
        if(props.roll !==state.mroll)
        {
        return{mroll:props.roll}
        }
        else{
   return null
        }
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.state.mroll<107)
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
        console.log("marks-get snapshotbefore update")
        console.log(preprops,prestate)
        return 45
    }
    componentDidUpdate(preprops,prestate,snapshot)
    {
console.log("marks- component dis update")
console.log(preprops,prestate,snapshot)
    }
  render() {
    console.log("marks render")
    return (
      <div>
      <h1>{this.state.mroll}</h1>
       
      </div>
    )
  }
}
