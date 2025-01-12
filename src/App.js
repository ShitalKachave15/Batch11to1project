import React from "react"
import './App.css'

import Test from './Test'
import Assignment from "./Assignment"
 
import First from './Component/First'

import ClassComp from './Component/ClassComp'
import Imagesexample from "./Component/Imagesexample"
import InlineCssex from "./Component/InlineCssex"
import CureentDateTimeAss from "./Component/CurrentDateTimeAss"
import FirstEx from "./PropsEx/FirstEx"
import SecondEx from "./PropsEx/SecondEx"
import img1 from './image/one.jpg'
import PropsusingClass from "./PropsEx/PropsusingClass"
import Data from "./PropsEx/ArrayData"
import ArrayData from "./PropsEx/ArrayData"
import { Calculator, Sub } from "./calculatorex/Calculator"
import ClassA from "./PropsDilling/ClassA"
import ClassC from "./PropsDilling/ClassC"
import Parent from "./PropsDilling/Parent"
import ConditionEx from "./ConditionalRendering/ConditionEx"
import Componentcondition from "./ConditionalRendering/Componentcondition"
import TeranaryOperatorEx from "./ConditionalRendering/TeranaryOperatorEx"
import IfElserendering from "./ConditionalRendering/IfElserendering"
import ElementVariable from "./ConditionalRendering/ElementVariable"
import ComponetExIfelse from "./ConditionalRendering/ComponetExIfelse"
import TernaryOpe from "./ConditionalRendering/TernaryOpe"
import TestGame from "./AssignmentGame/Test"

import EventEX from './Event/EventEx'
import ImagesComp from "./Event/ImagesComp"
import ClassComp1 from "./Event/ClassComp"
import StateEx from "./State/StateEx"
import ConstructorEx from "./State/ConstructorEx"
import firstimg from './image/one.jpg'
import secondimg from './image/sad.jpg'
import thirdimg from './image/happy.jpg'
import ArrayData1 from "./Event/ArrayData"
import UpdateState from "./State/UpdateState"
import Mounting from "./lifecycle/mounting/Mounting"
import Student from "./lifecycle/updating/Student"
import GetUpdate from "./lifecycle/updating/GetUpdate"
import UseStateEx from "./Hooks/UseStateEx"
import UseState from "./Hooks/UseState"
import CurrentTime from "./Hooks/CurrentTime"
import DigitalClock from "./Hooks/DigitalClock"
import UseEffectEx from "./Hooks/UseEffectEx"
import FormEx from "./Forms/FormEx"
import FormDatachange from "./Forms/FormDatachange"
import LoginForm from "./Forms/LoginForm"
import FormRegister from "./Forms/FormRegister"
import RegisterSpread from "./Forms/RegisterSpread"
import Register from "./Forms/Register"
import CompA from "./ContextAPI/CompA"
import ContextApiEx from "./ContextAPI/ContextApiEx"

import Main from "./UseContext/Main"
import List from "./ToDolistEx/List"
import { Route, Routes } from "react-router-dom"
import Home from "./Router/Home"
import About from "./Router/About"
import Contact from "./Router/Contact"
import UseMemoEx from "./UseMemoHooks/UseMemoEx"
import CallBackEx from "./UseCallbackHook/CallBackEx"
import ExUseMemo from "./UseMemoHooks/ExUseMemo"

//WITH NORMAL MAP FUNCTION

// function NewMap(val)
// {
//   return(
//     <SecondEx 
//   name={val.name}
//   img={val.img1}

//   link={val.link}
// />
//   )
// }

// function NewMap(val)
// {
//   return(
//     <EventEX
//   data={val.name}
//   imgname={val.img}

//   name={val.no}
// />
//   )
// }

function App()
{
    return(
        <>
        {/* <EventEX data="one" imgname={firstimg} name="first"/>
        <EventEX  data="two" imgname={secondimg} name="second"/>
        <EventEX  data="three" imgname={thirdimg} name="third"/> */}

{/* using array */}
        {/* <EventEX data={ArrayData1[0].name}
         imgname={ArrayData1[0].img}
          name={ArrayData1[0].no}
         />
          <EventEX data={ArrayData1[1].name}
         imgname={ArrayData1[1].img}
          name={ArrayData1[1].no}
         /> */}

{/* call array map function
{ArrayData1.map(NewMap)} */}


{/* {ArrayData1.map((val,index)=>
{
  console.log(index);
  return(
    <EventEX
    key={val.id}
    data={val.name}
    imgname={val.img}
    name={val.no}
   
  />
  )
})}

<IfElserendering/> */}

{/* <EventEX/> */}

{/* <UpdateState  id="106"/> */}

        {/* <ClassComp1 id="1" />
        <ImagesComp/>
        <UseState/>
        <StateEx name="xyz"/>
        <ConstructorEx/> */}
{/* <CureentDateTimeAss/>
        <Imagesexample/>
        <InlineCssex/>
   <div className="series">
   <First />
            <First/>
            <First/>
   </div>
            <Test/>
            <Assignment/>
            <ClassComp id="2"/> */}


            {/* <FirstEx  id="1" name="abc"/>
            <FirstEx  id="2" name="xyz"/>
            <FirstEx  id="3" name="dsfhsa"/> */}

            {/* <SecondEx 
            name="one" 
             img="three.jpg" 
             link="https://www.pexels.com/search/beautiful%20nature/"/> */}

            {/* <SecondEx 
            name={Data[0].name}
             img={Data[0].img1} 
             link={Data[0].link}/>
              <SecondEx 
            name={Data[1].name}
             img={Data[1].img1} 
             link={Data[1].link}/>
              <SecondEx 
            name={Data[1].name}
             img={Data[1].img1} 
             link={Data[1].link}/>

            <PropsusingClass 
            name="abc" 
            img={img1} 
            link="https://www.facebook.com/" /> */}

{/* call array map function */}
{/* {ArrayData.map(NewMap)} */}

{/* map array function with function name */}

 {/* {ArrayData.map(NewMap=(val)=>{
    return(
        <SecondEx 
  name={val.name}
  img={val.img1}

  link={val.link}
    
/>
    )
})} */}


{/* {ArrayData.map(const MapEx=(val)=>
{

    <Card 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  
})
} */}
{/* array map function without function name */}
{/* {ArrayData.map((val,index)=>
{
  console.log(index);
  return(
    <SecondEx
    key={val.id}
    name={val.name}
    img={val.img1}
    link={val.link}
   
  />
  )
})} */}


{/* <Calculator a={4} b={6}/>
<Sub c={9} d={10}/>

<Parent/>
<ClassC />
<ConditionEx/>
<Componentcondition/>
<TeranaryOperatorEx/>
<ElementVariable/>
<ComponetExIfelse/>
<TernaryOpe/>

<IfElserendering/>
<TestGame/> */}
{/* <TestGame/>  */}
{/* <Mounting  data="new"/> */}
{/* <Student/> */}

{/* <GetUpdate/> */}
{/* <UseStateEx/> */}
   {/* <UseState/>
   <CurrentTime/>
   <DigitalClock/>
   <UseEffectEx/> */}
   {/* <FormEx/> */}
   {/* <FormDatachange/>
   <LoginForm/> */}
   {/* <FormRegister/>
   */}
   {/* <Register/>
   <RegisterSpread/> */}
   {/* <ContextApiEx/> */}
   {/* <Main/>
   <List/> */}

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
  </Routes>

  {/* <UseMemoEx/>
  <CallBackEx/> */}
  <ExUseMemo/>


  
        </>




    )


   
    
}


export  default App
