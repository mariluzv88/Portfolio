import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import{useContext,useEffect,useRef, useState} from 'react'
import { AppContext } from '../context/App_context'
import { motion } from 'framer-motion'





function Main() {
    let {rightCaro,setRightCaro}= useContext(AppContext)
    let {leftCaro,setLeftCaro}= useContext(AppContext)
    const caroSell = useRef()
    let {setGameBoard,gameBoard}= useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
    const triviaGame = () =>{
        setGameBoard(!gameBoard)
       setStage('Start')
    }
    useEffect(()=>{
       console.log(caroSell.current.scrollWidth, caroSell.current.offsetWidth)
       setRightCaro(caroSell.current.scrollWidth-caroSell.current.offsetWidth)
       setLeftCaro(caroSell.current.scrollWidth-caroSell.current.offsetWidth)
      },[])
    
  return (
    <div className='container'>
        <Nav/>
       
        {/* profile section */}
        <div className='profile' id='profile'>
            <div className='hub'>
                   
                    <button className='name'>MARILUZ VARGAS</button>
                    <a   href="#projects"><button className='pop'><div className='push1'></div>Projects
                   
                    
                    </button></a>
                  
            </div>
            <div className='hub'>
           
            
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=mariluzv88@gmail.com&tf=cm' className='link'>
              <div className='push'>
                
                </div></a>
                     
             <a   href="https://www.linkedin.com/in/mariluz-vargas"><div className='widget1'>
                <img className='logo'src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif'/>
                </div>
            </a>
            
            </div>
            <div className='hub'>
           
            
            <a   href="https://github.com/mariluzv88"><div className='widget13'><div className='push3'>GitHub</div>
              
                </div>
            </a>
             <div className='gameBtn'>
                 
                        <button onClick={()=>{
                            triviaGame()
                            getTrivia()
                            // game.style= {display:  "flex"}
                        }}  className='noviceEngineer'> </button>
                    </div>
         
            <a  className='widget2' href="./images/mari.pdf">
                <div className='push2'>Resume PDF</div>
                
                
            </a>
            </div>
           
        </div>
        {/* about section */}
        <div className='about' id='about'>
           <div className='mainContainer'>
                <div className='main'>
                    <h1>Software Engineer</h1>
                    <h3>Hi,I'm Mariluz Vargas</h3>
                    <h4> I am a college educated, highly motivated,</h4>
                    <h4> Software Engineer with experience in web applications</h4>
                     <Link className='navLink' to="/about">
                         <div className='aboutBtn'><h3>Read More</h3></div>
                         </Link>  
                    <div>
                    </div>
                    
                </div>
               

            </div>
              
        </div>
        {/* project section */}
        <div className='projects' id='projects'>
          
          
            <motion.div ref={caroSell} className='caro'>
                        <motion.div drag='x' dragConstraints={{right:+leftCaro,left:-rightCaro}}className='projectContainer'>
                          
                                <div className='pro'>
                                    <div className='proHarry'>
                                <h2>Harry Potter : Wack a Mole game</h2>
                                <h5> 2 player Game with multiple stages </h5>
                                </div>
                                <a  href="https://mariluzv88.github.io/wackAMole/">
                                        <button className='proBtn'>
                                        Live Demo
                                        </button>
                                    </a>   
                                    <a  href="https://github.com/mariluzv88/wackAMole">
                                        <button className='proBtn'>
                                        Code
                                        </button>
                                    </a> 
                                </div>
                                <div className='pro'>
                                    <div className='proName'>
                                <h2>PerScholas Website Mockup</h2>
                                <h5>Created to emulate the PerScholas Website. Made fully responsive</h5>
                                </div>
                                <a  href="https://mariluzv88.github.io/perScholasMockup/">
                                        <button className='proBtn'>
                                        Live Demo
                                        </button>
                                    </a>   
                                    <a  href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                                        <button className='proBtn'>
                                        Code
                                        </button>
                                    </a> 
                                </div>
                                <div className='pro'>
                                    <div className='proMuse'>
                                <h2>Mueseum Locations API</h2>
                                <h5>Created to emulate the PerScholas Website. Made fully responsive</h5>
                                </div>
                                <a  href=" https://mariluzv88.github.io/museumApi/">
                                        <button className='proBtn'>
                                        Live Demo
                                        </button>
                                    </a>   
                                    <a  href="https://github.com/mariluzv88/museumApi">
                                        <button className='proBtn'>
                                        Code
                                        </button>
                                    </a> 
                                </div>
                                <div className='pro'>
                                    <div className='proNasa'>
                                <h2>Nasa Inspired Mockup</h2>
                                <h5>Created to reimagine the Nasa official Website. Ultilizes keyframes</h5>
                                </div>
                                <a  href="https://mariluzv88.github.io/nasaMockSite/">
                                        <button className='proBtn'>
                                        Live Demo
                                        </button>
                                    </a>   
                                    <a  href="https://github.com/mariluzv88/nasaMockSite">
                                        <button className='proBtn'>
                                        Code
                                        </button>
                                    </a> 
                                </div>
                            
                        </motion.div>
                        
                </motion.div>
                </div>
      
                        <GameBoard/>
                    
         
    </div>
    
  )
}

export default Main

