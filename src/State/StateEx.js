import { Component } from "react";


class StateEx extends Component{

   state={
        id:"1",
        name:this.props.name
    }
    
    render(){
        return(
           <>
             <h1>hello {this.state.id}</h1>
             <h1>hello {this.state.name}</h1>
           </>
        )
    }
}

export default StateEx