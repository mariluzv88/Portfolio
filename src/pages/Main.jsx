import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Profile from './Profile'


function Main() {
  return (
    <div className='container'>
      <div className='profile'>
      <Profile/> </div>
      <div className='about'>
      <About/></div>
      <div className='projects'>
      <Projects/></div>
      <div className='contact'>
      <Contact/></div>
    </div>
  )
}

export default Main