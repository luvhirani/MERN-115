import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Fetch = () => {

    const [users, setUsers] = useState("")
    const [count, setCount] = useState(0)
    const [dec, setDec] = useState(0)

    
    const getData = () =>{
        // const response = fetch("https://jsonplaceholder.typicode.com/users")
        const response = axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response)
        // console.log(response)
    }
    
        // getData()
    console.log("data")

    function handleClick(){
      setCount(count+1)
    }
    

    // Type 1 : Runs on every render
    // useEffect(()=>{
    //   console.log("Inside useEffect")
    //   // getData();
    // })

    // Type 2: I will run only on the first render
    // useEffect(()=>{
    //   console.log("Inside useEffect")
    //   getData();
    // },[])

    // Type 3 : run on first render and whenever state changes inside dep array
    useEffect(()=>{
      console.log("Inside useEffect")
      getData();
    },[count])

    // Lifecycle of React Components -> didMount, didUpdate ,didUnMount

  return (
    <div>
        <h1>UseEffect:{count} </h1>
        <button onClick={handleClick}>
          +
        </button>
        {dec}
        <button onClick={()=>{setDec(dec-1)}}>-</button>
        <br />
        <br />
        <input onChange={(event)=>{console.log(event.target.value)}} type="text" />
    </div>
  )
}

export default Fetch