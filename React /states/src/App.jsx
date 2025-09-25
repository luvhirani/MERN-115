import { useState } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker'
import ColorDIsplay from './components/ColorDIsplay'

function App() {
  
  const [color,setColor] = useState("yellow")
  console.log(color)

  return (
    <>
      <ColorPicker color={color} setColor={setColor}/>
      <ColorDIsplay color={color} />
    </>
  )
}

export default App
