import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
import Product from './components/Product'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(True)

    if(isLoggedIn)
     return (
    // <Logout/>
    console.log("Logout")
    )
    
    // {isLoggedIn} ?  <Logout/>  : <Login/>

return(
  <>
  console.log("Login")

  {/* <Login/> */}

      {/* <Product pname="Mobile" image="https://blogassets.airtel.in/wp-content/uploads/2024/10/2100184_P6YTO90-1.jpg" desc="This is mobile Phone" />
      <Product pname="Headphone" image="https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg" desc="This is Headphone"/>
      <Product pname="Laptop" image="https://images-cdn.ubuy.co.in/64c24ac1deecdc59323a1773-hp-15-6-ryzen-5-8gb-256gb-laptop-rose.jpg" desc="This is Laptop"/> */}

      {/* <Counter/> */}
      {/* <Fetch/> */}

      
      
      
      {/* {isLoggedIn ?  <Logout/>  : <Login/>} */}
      
    </>
)
}

export default App
