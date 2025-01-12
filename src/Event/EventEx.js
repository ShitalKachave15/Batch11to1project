
import imgn from '../image/happy.jpg'

import   '../Event/EventEX.css'
function EventEx(props)
{

    let a=20;
    let name="Dsf"
    let fullname=`my full name is ${name}`


let imgname="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZTLx2ZnPg9Dd3HBYDWWVmZG_u2bSt-AwFw&s"


const test=()=>{
    alert("hello")
}
const test1=(a)=>{
console.log("hello")
alert(a)
}


const shoot = (a, b) => {
    alert(b.type);
        /*
        'b' represents the React event that triggered the function.
    In this case, the 'click' event
        */
  }
    return(
    // <div>
    //         <h1>hello</h1>   
    //         <h1>hello</h1>   
    // </div>
    // <React.Fragment>
    //      <h1>hello</h1>   
    //      //         <h1>hello</h1>   
    // </React.Fragment>

    <>
    {/* <h1> value of a is={a}</h1>
    <h1> name  is={props.name}</h1>
    <h1> mul  is={props.a* props.b}</h1> */}
    <h1>SERIES {props.data}</h1>
    <img src={props.imgname} height={200} width={200} />
    <h1>name of image {props.name}</h1>

    {/* <button onClick={test}>click</button> */}
    {/* <button onMouseOver={test}>mouseover</button>
     */}
     <button onContextMenu={test}>click</button>
     <button onDoubleClick={()=>test1("new data")}>double click</button>
     <button onMouseDown={(event) => shoot("Goal!", event)}>Take the shot!</button>

     


    {/* <img src={imgn}  />
    <img src='three.jpg' height={200} width={200}/> */}



    </>
     
    )
}

export default EventEx