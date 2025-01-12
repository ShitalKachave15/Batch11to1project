import { Component } from "react";



class ConstructorEx extends Component{

    constructor() {
        super();
        this.state = {
          id: 345,
          name: "kartik",
          age: 27,
        };
    }

    render()
    {
        return(
            <>
<h1> hello {this.state.age}</h1>
            </>
        )
    }
}


export default ConstructorEx