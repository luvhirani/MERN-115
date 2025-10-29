import React, {useRef} from 'react'

const Ref = () => {
    // Step 1: Create
    let color = useRef()

    console.log(color)

    function changeColor(){
       
        color.current.style.backgroundColor = "red"
        color.current.style.fontSize = "100px"
    }


  return (
    <div>
        {/* Step 2: link useRef with element */}
        <button ref={color} >Color</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Ref