import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './style.css'
import Main from './pages/Main'
import Profile from './pages/Profile'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
     
      
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      
    </Routes>
    </div>
  )
}

export default App