import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
        <div className='navContainer'>
            
            
                <a className='navLink' href="/Portfolio/#profile">
                        <div>
                        Home
                        </div>
                    </a>
            
            
            <a className='navLink' href="/Portfolio/#about">
                <div >About</div>
            </a>
            {/* <a  className='navLink' href="/#projects"> */}
            <a  className='navLink' href="/Portfolio#projects">
            
                <div>Projects</div>
            </a>
           
        </div>
    </div>
  )
}

export default Nav