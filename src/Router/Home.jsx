import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>This is a Home page</h1>
       <Link style={{textDecoration:"none"}} to="about">About</Link>
       <Link to="contact">contact</Link>
       {/* <a href='about.html'>about</a> */}
    </div>
  )
}

export default Home
