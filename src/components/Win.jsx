import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Win() {
  let {setGameBoard} = useContext(AppContext)
  let {gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
  return (
    <div>
        <button className='trivX' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
        <div className='engineer'>
          <div className='gText'>
            <h1>SpongeBob is now an Expert in Software Engineering !</h1><br/>
            <h2>Through dedication and hard work he is ready to succeed at any company</h2><br/>
            </div>
            
            <img className='pic'src='https://i.gifer.com/72Sz.gif'/>
            <button className='ready' onClick={()=>{
                setStage("Job")
           }}>Hire SpongeBob</button>
            </div>
    </div>
  )
}

export default Win