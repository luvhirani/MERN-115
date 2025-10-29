import React, { useState } from 'react'
import { increment, decrement, reset } from '../Redux/slices/Counterslice'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    console.log(count)
    const dispatch = useDispatch()

    function handleIncrement(){
        console.log("inside handleIncrement")
        dispatch(increment())
    }

    function handleDecrement(){
        console.log("inside handleDecrement")
        dispatch(decrement())
    }

  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <h3>Count: {count}</h3>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter