
import img1 from '../images/pexels-gstudio-10583612.jpg'
import img2 from '../image/one.jpg'
import '../Component/Imagesex.css'
function Imagesexample()
{

let icon= <i class="fa-brands fa-whatsapp"></i>
    return(

        <>
        <h1 className='font'>images list {icon} of <span >internal</span>  </h1>
        {/* image using src folder need to import */}
           <img src={img1} height={200} width={200}/>
           <img src={img2} height={200} width={200}/>

           {/* image using public folder do not need import */}
           <img src='three.jpg' height={200} width={200}/>
         

        </>
    )
    
}

export default Imagesexample