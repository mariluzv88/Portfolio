import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Start() {
  let {setGameBoard} = useContext(AppContext)
  let {gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
  return (
    <div >
          <button className='trivX' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
         <div className='engineer'>
          <div className='gText'>
            <h1>Help SpongeBob get a job as a Software Engineer</h1><br/>
            <h3>Answer questions to help him learn and grow</h3><br/>
            </div>
            {/* <img className='pic'src='https://i.gifer.com/yB.gif'/> */}
            <img className='pic'src='https://i.gifer.com/qF.gif'/>
            <button className='ready' onClick={()=>{
                setStage("Trivia")
           }}>I'm Ready</button>
            </div>
    </div>
  )
}

export default Start