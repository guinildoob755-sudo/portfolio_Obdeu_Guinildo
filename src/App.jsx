import { useState } from 'react'
import './App.css'
import './index.css'  
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'

import Navbar from './components/Navbar/Navbar'
import Cursor from './components/Cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    
      <Navbar></Navbar>
      <Cursor/>
      <Hero /> 
      <About/>
    </>
  )
}

export default App
