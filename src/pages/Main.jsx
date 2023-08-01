import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Profile from './Profile'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import GameBoard from '../components/GameBoard'


function Main() {
  return (
    <div className='container'>
      
        <div className='profile' id='profile'>
        <Nav/>
        <GameBoard/>
        </div>
        <div className='about' id='about'>
        <Link to="/about">
            <div >ABOUT</div>
        </Link>
        <a href="#profile">
            <div>
               Home
            </div>
        </a>
        </div>
        <div className='projects' id='projects'>
        <Link to="/projects">
            <div>PROJECTS</div>
        </Link>
        <a href="#profile">
            <div>
               Home
            </div>
        </a>
       </div>
        <div className='contact' id='contact'>
        <Link to="/contact">
            <div>CONTACT</div>
        </Link> 
        <a href="#profile">
            <div>
               Home
            </div>
        </a>
        </div>
    </div>
    
  )
}

export default Main

{/* <div>Mari's Portfolio</div>
        <Link to="/">
            <div>
               Home
            </div>
        </Link>

        <Link to="/profile">
            <div>
                <img className='icon' src='./images/mari.png'/>
            </div>
        </Link>
        <Link to="/about">
            <div >ABOUT</div>
        </Link>
        <Link to="/projects">
            <div>PROJECTS</div>
        </Link>
        <Link to="/contact">
            <div>CONTACT</div>
        </Link> */}