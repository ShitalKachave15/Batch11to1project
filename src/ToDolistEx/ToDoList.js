import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = (props) => {
    
    const deleteItem=()=>
  {
    console.log("deleted")
  }
  return (


   <>
     <div className='todostyle'>
      {/* <i className="fa-solid fa-xmark"
        onClick={deleteItem}></i>  */}
       <i className="fa-solid fa-xmark"
        onClick={()=>{props.onSelect(props.id)}}></i> 
        {/*  <DeleteIcon/> */}

   <li>{props.text}</li>
       </div>
   </>
  )
}

export default ToDoList
