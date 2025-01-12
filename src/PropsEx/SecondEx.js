import img1 from '../images/pexels-gstudio-10583612.jpg'

function SecondEx(props)
{
    let design={
        height:"400px",
        width:"300px",
        backgroundColor:"yellow"
    }
    return(
        <>
            <div style={design}>
                <h1>series {props.name}</h1>
                <img src={props.img} height={200} width={200}/>
                   
                   <a href={props.link}>click</a>
                <p>hbdsfi ijsfha ijojsdz</p>
            </div>
        </>
    )
}

export default SecondEx