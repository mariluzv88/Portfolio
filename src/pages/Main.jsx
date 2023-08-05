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
    let {getTrivia} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
    const triviaGame = () =>{
        setGameBoard(!gameBoard)
       setStage('Start')
    }
    // useEffect(()=>{
    //     getTrivia()
    //   },[triviaGame()])
    
  return (
    <div className='container'>
        {/* <div className='gameBtn'>
        <button onClick={()=>{
            getTrivia()
            triviaGame()
            // game.style= {display:  "flex"}
        }}  className='noviceEngineer'>!!KELP!!   </button>
        </div> */}
        <div className='profile' id='profile'>
            <div className='hub'>
                    {/* <Nav/> */}
                    <button className='name'>MARILUZ VARGAS</button>
                    <a   href="#projects"><button className='widget'>Projects
                        
                        {/* <div>PROJECTS</div> */}
                    
                    </button></a>
                    <div className='gameBtn'>
                        <button onClick={()=>{
                            getTrivia()
                            triviaGame()
                            // game.style= {display:  "flex"}
                        }}  className='noviceEngineer'>!!KELP!!   </button>
                    </div>
            </div>
            <div className='hub'>
            <a   href="https://www.linkedin.com/in/mariluz-vargas"><div className='widget1'>
                <img className='logo'src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif'/>
                </div>
            </a>
            <a   href="https://github.com/mariluzv88"><div className='widget1'>
                <img className='logo'src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif'/>
                </div>
            </a>
            </div>
           
        </div>
        <div className='about' id='about'>
           
            {/* <a href="#profile">
                <div>
                Home
                </div>
            </a> */}
            <div className='overlay'></div>
            <div className='mainContainer'>
                <div className='main'>
                    <h1>Software Engineer</h1>
                    <h4>Hi,I'm Mariluz Vargas</h4>
                    <h5> I am a college educated, highly motivated,</h5>
                    <h5> Software Engineer with experience in web applications</h5>
                     <Link className='navLink' to="/about">
                         <div >Read More</div>
                         </Link>  
                    <div>
                    <div className='overlay'></div>
                        {/* <a href="https://www.linkedin.com/in/mariluz-vargas">
                            <div>
                            linkedin
                            </div>
                        </a>   
                        <a href="https://github.com/mariluzv88">
                            <div>
                            gitHub
                            </div>
                        </a> */}
                         
                    </div>
                    
                </div>
                {/* <div className='main'>
                <img className='icon' src='./images/mari.png'/>
                </div> */}

            </div>
                {/* <GameBoard/> */}
        </div>
        <div className='projects' id='projects'>
          
            {/* <a href="#profile">
                <div>
                Home
                </div>
            </a> */}
            <div className='title'>
                <div>PROJECTS</div>
                 <div >
                        <Link className='navLink' to="/projects">
                        <div> More Projects</div>
                        </Link>
                    </div>
            </div>
            <div className='projectContainer'>
                <div className='pro'>
                    {/* <img className='proImg' src='./images/perscholas.jpg'/> */}
                        <a  className='code'href="https://mariluzv88.github.io/perScholasMockup/">
                            <div>
                            Live Demo
                            </div>
                        </a>   
                        <a className='code' href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                            <div>
                            Code
                            </div>
                        </a>  
                        
                         
                    </div>
                <div className='pro'>
                    {/* <img className='proImg' src='./images/perscholas.jpg'/> */}
                        <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                            <div>
                            Live Demo
                            </div>
                        </a>   
                        <a  className='code'href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                            <div>
                            Code
                            </div>
                        </a>  
                        
                         
                    </div>
                    {/* <div className='prop'>
                        <Link id='a' to="/projects">
                        <div> More Projects</div>
                        </Link>
                    </div> */}
               </div>
            <div className='projectContainer'>
                <div className='pro'>
                    {/* <img className='proImg' src='./images/perscholas.jpg'/> */}
                        <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                            <div>
                            Live Demo
                            </div>
                        </a>   
                        <a className='code' href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                            <div>
                            Code
                            </div>
                        </a>  
                        
                         
                    </div>
                <div className='pro'>
                    {/* <img className='proImg' src='./images/perscholas.jpg'/> */}
                        <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                            <div>
                            Live Demo
                            </div>
                        </a>   
                        <a  className='code'href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                            <div>
                            Code
                            </div>
                        </a>  
                        
                         
                    </div>
                    {/* <div className='prop'>
                        <Link id='a' to="/projects">
                        <div> More Projects</div>
                        </Link>
                    </div> */}
               </div>
            
       </div>
        <div className='contact' id='contact'>
                <div className='contactContainer'>
                    <div className='con'>
                        <Link id='a' to="/contact">
                            <div>CONTACT</div>
                        </Link> 
                        <a href="./images/mari.pdf">
                            <div>
                            Resume PDF
                            </div>
                            </a>
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