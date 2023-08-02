import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Profile from './Profile'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import{useContext,useEffect,useReducer, useState} from 'react'
import { AppContext } from '../context/App_context'



// onClick={popup()}
function Main() {
    let {setGameBoard,gameBoard}= useContext(AppContext)
    
  return (
    <div className='container'>
        <div className='gameBtn'>
        <button onClick={()=>{
            setGameBoard(!gameBoard)
        }}  className='noviceEngineer'>!!Help!!    this novice become an engineer</button>
        </div>
        <div className='profile' id='profile'>
            <Nav/>
            
            {/* <GameBoard/> */}
        </div>
        <div className='about' id='about'>
           
            {/* <a href="#profile">
                <div>
                Home
                </div>
            </a> */}
            <div className='mainContainer'>
                <div className='main'>
                    <h1>Software Engineer</h1>
                    <h4>Hi,I'm Mariluz Vargas</h4>
                    <h5> I am a college educated, highly motivated,</h5>
                    <h5> Software Engineer with experience in web applications</h5>
                    <div>
                        <a href="https://www.linkedin.com/in/mariluz-vargas">
                            <div>
                            linkedin
                            </div>
                        </a>   
                        <a href="https://github.com/mariluzv88">
                            <div>
                            gitHub
                            </div>
                        </a>
                         <Link id='a' to="/about">
                         <div >ABOUT</div>
                         </Link>   
                    </div>
                    
                </div>
                <div className='main'>
                <img className='icon' src='./images/mari.png'/>
                </div>

            </div>
                {/* <GameBoard/> */}
        </div>
        <div className='projects' id='projects'>
          
            {/* <a href="#profile">
                <div>
                Home
                </div>
            </a> */}
            <div className='projectContainer'>
                <div className='pro'>
                        <a href="https://www.linkedin.com/in/mariluz-vargas">
                            <div>
                            Live Demo
                            </div>
                        </a>   
                        <a href="https://github.com/mariluzv88">
                            <div>
                            Code
                            </div>
                        </a>  
                        <Link id='a' to="/projects">
                        <div>PROJECTS</div>
                        </Link> 
                    </div>
                </div>
            
       </div>
        <div className='contact' id='contact'>
                <div className='contactContainer'>
                    <div className='con'>
                        <Link id='a' to="/contact">
                            <div>CONTACT</div>
                        </Link> 
                        {/* <a href="#profile">
                            <div>
                            Home
                            </div>
                        </a> */}
                        <GameBoard/>
                    </div>
                </div>
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