
import React from 'react'
function Test()
{
    const al=[10,20,30,40]
    let fname="javascript"
    let lname="dsfgs"

    let imgadd="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"

    let links="https://www.pexels.com/search/beautiful%20nature/"
    return(
        <>
<div>
{/* jsk with value and expression */}
<h1>welcome {fname} {2+3} </h1>
{/* used javascript in html using jsx */}
<h1>{lname}</h1>

{/* jsx with interpolation */}
<h1> {` full name is ${fname} ${lname}`}</h1>   
<p>loremnf hjdiks jdhik jfiksfj jijfew jhis jhijs jkhds {Math.random()}
</p>
</div>

<div>
<h1 className="head">welcome</h1>
<p>loremnf hjdiks jdhik jfiksfj jijfew jhis jhijs jkhds 
</p>
</div>
<React.Fragment>
<div>
<h1>welcome</h1>
<p>loremnf hjdiks jdhik jfiksfj jijfew jhis jhijs jkhds 
</p>
</div>


<img  src={imgadd} alt="newimage" height={200} width={300}/>
<img src={imgadd} alt="newimage" height={200} width={300}/>

<a href={links}><img src={imgadd} alt="newimage" height={200} width={300}/>
</a>


<ol>
    <li>
        one
    </li>
    <li>
        one
    </li>
    <li>
        one
    </li>
    <li>
        one
    </li>

</ol>
</React.Fragment>
        </>
    )
}


export default Test