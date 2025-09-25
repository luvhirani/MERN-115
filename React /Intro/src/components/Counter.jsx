import React,{useState} from 'react'
import '../components/Counter.css'

const Counter = () => {

  const [count, setCount] = useState(0);

    // let count = 0;

    function handleDecrement(){
        setCount(count-1)
        console.log(count)
    }

  return (
    <div className='counter'>
        <h1>Counter App</h1>

        <button onClick={()=>{setCount(count+1)}}>+</button>

        <p>Count : {count} </p>

        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter