import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Start() {
    // let {gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
  return (
    <div >
         <div className='engineer'>
            <h3>Help SpongeBob get a job as a Software Engineer</h3>
            <h4>Answer questions to help him learn and grow</h4>
            
            <img className='pic'src='https://i.gifer.com/yB.gif'/>
            <button onClick={()=>{
                setStage("Trivia")
           }}>I'm Ready</button>
            </div>
    </div>
  )
}

export default Start