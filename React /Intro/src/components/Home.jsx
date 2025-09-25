import React,{useState} from 'react'

const Home = () => {

    const [isLoggedIn, setLoggedIn] = useState(true)

  return (
    isLoggedIn ?
    <>
     <button>Logout</button>
    </> 
     :
     <>
      <button>Login</button>
    </> 
  )
}

export default Home