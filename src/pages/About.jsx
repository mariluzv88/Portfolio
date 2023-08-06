import React from 'react'
import Back from '../components/Back'
import Nav from '../components/Nav'

function About() {
  return (
    <div>
        <div className='aboutPage'>
            <Nav/> 
        {/* <Back/> */}
            <div className='page'>
               
                <h4> Having completed my studies in IT and Networking and honed my skills through a Software engineering boot camp at Per Scholas, I am confident that my passion for programming and my ability to learn and grow will make me a valuable asset to any team.</h4><br></br>
                <h4> What do you get when you mix a gamer Nerd that loves puzzles with the technology industry? Someone who will not stop and needs to conquer every software and DBMS. I have a passion for putting pieces together. My hobbies include video editing and design, learning several programming languages, and data mining different software. I love staying busy. I will feel successful when I am able to use my creative mindset and astute detailed focus to truly learn and master everything in the IT field. Problem-solving and really breaking down how and why things work is my favorite pass time.</h4>
           
             </div>
            <div className='iconPage'>
                <div>
                    <div className='aboutIcons'>
                        <div className='cImg'>CSS</div>
                    </div>
                    <div className='aboutIcons'>
                    <div className='hImg'>HTML</div>
                    </div>
                </div>
                <div>
                    <div className='aboutIcons'>
                    <div className='jImg'>JS</div>
                    </div>
                    <div className='aboutIcons'>
                    <div className='sImg'>MySQL</div>
                    </div>
                    
              </div>
              <div>
                    <div className='aboutIcons'>
                    <div className='eImg'>EXPRESS JS</div>
                    </div>
                    <div className='aboutIcons'>
                    <div className='rImg'>REACT JS</div>
                    </div>
                </div>
                <div>
                    <div className='aboutIcons'>
                    <div className='nImg'>NODE JS</div>
                    </div>
                    <div className='aboutIcons'>
                    <div className='mImg'>MONGO DB</div>
                    </div>
                </div>
            </div>
        </div>
       
       
          
       
  
  </div>
  )
}

export default About