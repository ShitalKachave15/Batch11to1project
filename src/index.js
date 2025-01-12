// var React=require('react')
import React from 'react'
// var ReactDom=require('react-dom')
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'



ReactDom.render(
    <BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root"))



// let demo=React.createElement("h1",null,"new data")
// ReactDom.render(demo,document.getElementById("root"))


// var h1=document.createElement("h1")
// h1.innerHTML="new data"
// document.getElementById("root").appendChild(h1)

