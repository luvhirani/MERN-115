import React from 'react'
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
        <h1>This is my Home page</h1>
        <a href="/login">Login</a>
        <br />
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Home