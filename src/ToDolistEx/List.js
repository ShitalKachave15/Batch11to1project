import React,{useState} from 'react'
import './List.css'
import ToDoList from './ToDoList'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const List = () => {

    const [inputlist,setinputlist]=useState("")
   const[items,setitems]=useState([])

const itemE=(event)=>{
    setinputlist(event.target.value)
}

const listItem=()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist]
    })
    setinputlist("")   //empty the input
  }


  const deleteItem=(id)=>
    {
      setitems((olditems)=>{
        return olditems.filter((arrelement,index)=>{
         return index!==id
        })
      })
      console.log("deleted")
    }

  return (
    <>

   
    <div className='maindiv'>
    <div className='center'>
<br/>
<h1>To do list</h1>
  <br/>
  <input type='text' placeholder='Add Items' onChange={itemE} value={inputlist}></input>
  <button onClick={listItem} >
    <AddCircleIcon/>
  </button>

  <ol>
    {/* <li>Buy Apple</li>  */}
    {/* <li>{inputlist}</li> */}
   {/* { items.map((itemval)=>{
        return<li>{itemval}</li>
    })
}  */}

{ items.map((itemval,Index)=>{
    return (
    <ToDoList key={Index} 
    id={Index}
      text={itemval}
      onSelect={deleteItem}
    />
    )
  })}
  </ol>
    </div>
      
    </div>
    </>
  )
}

export default List
