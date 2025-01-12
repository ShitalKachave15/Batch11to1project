import { Component } from "react"


let design={
    height:"400px",
    width:"300px",
    backgroundColor:"yellow"
}
class PropsusingClass extends Component
{
    render()
    {
        return(
            
                <>
                <div style={design}>
                    <h1>series {this.props.name}</h1>
                    <img src={this.props.img} height={200} width={200}/>
                       
                       <a href={this.props.link}>click</a>
                    <p>hbdsfi ijsfha ijojsdz</p>
                </div>
            </>
            
        )
    }
}

export default PropsusingClass