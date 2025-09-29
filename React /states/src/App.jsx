import { useState, createContext } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker'
import ColorDIsplay from './components/ColorDIsplay'
import Child1 from './components/Child1'

// step 1 -> Creating Context
export const NameContext = createContext();

function App() {

  const [color,setColor] = useState("")

  const [name, setName] = useState("Raj")

  console.log(color)

  return (
    <>
      {/* <ColorPicker color={color} setColor={setColor}/>
      <ColorDIsplay color={color} /> */}

        {/* step2 -> Providing Context */}
      <NameContext.Provider value={name}>
        <Child1/>
      </NameContext.Provider>
    </>
  )
}


export default App
