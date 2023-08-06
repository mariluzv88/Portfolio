import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Profile from './Profile'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import{useContext,useEffect,useRef, useState} from 'react'
import { AppContext } from '../context/App_context'
import { motion } from 'framer-motion'




// onClick={popup()}
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
                    <a   href="#projects"><button className='pop'><div className='push1'></div>Projects
                    {/* <img className='pop'src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F438fe720-6157-4ef1-ba7b-73747b06fdbc_480x360.gif'/> */}
                        {/* <div>PROJECTS</div> */}
                    
                    </button></a>
                    {/* <div className='gameBtn'>
                        <button onClick={()=>{
                            getTrivia()
                            triviaGame()
                            // game.style= {display:  "flex"}
                        }}  className='noviceEngineer'>!!KELP!!   </button>
                    </div> */}
            </div>
            <div className='hub'>
           
            {/* <a   href="https://github.com/mariluzv88"><div className='widget1'>
                <img className='logo'src='https://cdn.dribbble.com/users/5816579/screenshots/16062020/media/2338fc5e5258181685bdee0646d17523.jpg?resize=1600x1200&vertical=center'/>
                </div>
            </a> */}
            
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=mariluzv88@gmail.com&tf=cm' className='link'>
              <div className='push'>
                
                </div></a>
                     
             <a   href="https://www.linkedin.com/in/mariluz-vargas"><div className='widget1'>
                <img className='logo'src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif'/>
                </div>
            </a>
            {/* <a  className='widget2' href="./images/mari.pdf">
                <div className='push'>Resume PDF</div>
                
                
            </a> */}
            </div>
            <div className='hub'>
           
            {/* <a   href="https://www.linkedin.com/in/mariluz-vargas"><div className='widget1'>
                <img className='logo'src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linked-logo.gif'/>
                </div>
            </a> */}
            <a   href="https://github.com/mariluzv88"><div className='widget13'><div className='push3'>GitHub</div>
                {/* <img className='logo'src='https://cdn.dribbble.com/users/5816579/screenshots/16062020/media/2338fc5e5258181685bdee0646d17523.jpg?resize=1600x1200&vertical=center'/> */}
                </div>
            </a>
             <div className='gameBtn'>
                 
                        <button onClick={()=>{
                            getTrivia()
                            triviaGame()
                            // game.style= {display:  "flex"}
                        }}  className='noviceEngineer'> </button>
                    </div>
            {/* <Link className='link' to="/contact">
              <div className='push'>
                Contact Me
                </div>
                     </Link>  */}
            
            <a  className='widget2' href="./images/mari.pdf">
                <div className='push2'>Resume PDF</div>
                
                
            </a>
            </div>
           
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
                {/* <GameBoard/> */}
        </div>
        <div className='projects' id='projects'>
          
            {/* <a href="#profile">
                <div>
                Home
                </div>
            </a> 
             <div className='title'>
                <div>PROJECTS</div>
                 <div >
                        <Link className='navLink' to="/projects">
                        <div> More Projects</div>
                        </Link>
                    </div>
            </div> */}
            <motion.div ref={caroSell} className='caro'>
                        <motion.div drag='x' dragConstraints={{right:+leftCaro,left:-rightCaro}}className='projectContainer'>
                            {/* <div className='pro'>
                                <img className='proImg' src='./images/perscholas.jpg' />
                                    
                                    
                                    
                                </div> */}
                                <div className='pro'>
                                    <div className='proName'>
                                <h3>PerScholas Website Mockup</h3>
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
                                    <div className='proName'>
                                <h3>PerScholas Website Mockup</h3>
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
                                    <div className='proName'>
                                <h3>PerScholas Website Mockup</h3>
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
                                    <div className='proName'>
                                <h3>PerScholas Website Mockup</h3>
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
                            {/* <div className='pro'>
                                <img className='proImg' src='./images/perscholas.jpg'/> */}
                                    {/* <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                                        <div>
                                        Live Demo
                                        </div>
                                    </a>   
                                    <a  className='code'href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                                        <div>
                                        Code
                                        </div>
                                    </a>   */}
                                    
                                    
                                {/* </div> */}
                                {/* <div className='prop'>
                                    <Link id='a' to="/projects">
                                    <div> More Projects</div>
                                    </Link>
                                </div> */}
                        {/* </div>
                        <div className='projectContainer'> */}
                            {/* <div className='pro'>
                                <img className='proImg' src='./images/perscholas.jpg'/> */}
                                    {/* <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                                        <div>
                                        Live Demo
                                        </div>
                                    </a>   
                                    <a className='code' href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                                        <div>
                                        Code
                                        </div>
                                    </a>  
                                     */}
                                    
                                {/* </div> */}
                            {/* <div className='pro'>
                                <img className='proImg' src='./images/perscholas.jpg'/> */}
                                    {/* <a className='code' href="https://mariluzv88.github.io/perScholasMockup/">
                                        <div>
                                        Live Demo
                                        </div>
                                    </a>   
                                    <a  className='code'href="https://github.com/mariluzv88/perScholasMockup/blob/master/index.html">
                                        <div>
                                        Code
                                        </div>
                                    </a>  
                                     */}
                                    
                                {/* </div> */}
                                {/* <div className='prop'>
                                    <Link id='a' to="/projects">
                                    <div> More Projects</div>
                                    </Link>
                                </div> */}
                        </motion.div>
                        
                </motion.div>
                </div>
        {/* <div className='contact' id='contact'> */}
                {/* <div className='contactContainer'> */}
                    {/* <div className='con'>
                        <Link id='a' to="/contact">
                            <div>CONTACT</div>
                        </Link> </div> */}
                        {/* <a href="./images/mari.pdf">
                            <div>
                            Resume PDF
                            </div>
                            </a> */}
                        {/* <a href="#profile">
                            <div>
                            Home
                            </div>
                        </a> */}
                        <GameBoard/>
                    
                {/* </div> */}
        {/* </div> */}
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