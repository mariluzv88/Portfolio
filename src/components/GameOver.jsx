import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/App_context'

function GameOver() {
  let {setGameBoard} = useContext(AppContext)
  let {gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
      getTrivia()
    },[])
  return (
    <div>
        <div className='engineerOver'>
        <button className='xBtn' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
          <div className='failText'>
            <h1>YOU HAVE FAILED</h1><br/>
            <h2>SpongeBob still needs you !</h2><br/>
            </div>
            <img className='pic'src='https://i.gifer.com/1wo.gif'/>
            <button  className='ready'onClick={()=>{
                setStage("Start")
           }}>Try Again</button>
            </div>
    </div>
  )
}

export default GameOver