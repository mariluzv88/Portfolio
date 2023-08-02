import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
        <div className='navContainer'>
            <div >Mari's Portfolio</div>
            
                <a href="#profile">
                        <div>
                        Home
                        </div>
                    </a>
            
            {/* <a to="#profile">
                <div>
                    <img className='icon' src='./images/mari.png'/>
                </div>
            </a> */}
            <a href="#about">
                <div >ABOUT</div>
            </a>
            <a href="#projects">
                <div>PROJECTS</div>
            </a>
            <a href="#contact">
                <div>CONTACT</div>
            </a>
        </div>
    </div>
  )
}

export default Nav