import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Memo from './components/Memo';
import Ref from './components/Ref';

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
      <Route
          path='/'
          element={<Home/>} 
        />

        <Route
          path='/login'
          element={<Login/>} 
        />

        <Route 
          path='/signup'
          element={<Signup/>} 
        />

          <Route 
            path='/memo'
            element={<Memo/>} 
        />

          <Route 
            path='/ref'
            element={<Ref/>} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
