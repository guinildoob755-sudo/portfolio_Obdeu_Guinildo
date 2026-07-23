import { useState } from 'react'
import './App.css'
import './index.css'  
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'

import Navbar from './components/Navbar/Navbar'
import Cursor from './components/Cursor'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Cursor/>
      <Hero /> 
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </>
  )
}

export default App
