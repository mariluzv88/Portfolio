import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/App_context'

function GameOver() {
    let {setStage} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
      getTrivia()
    },[])
  return (
    <div>
        <div className='engineer'>
            <h3>YOU HAVE FAILED</h3>
            <h4>SpongeBob still needs you !</h4>
            
            <img className='pic'src='https://i.gifer.com/1wo.gif'/>
            <button onClick={()=>{
                setStage("Start")
           }}>Try Again</button>
            </div>
    </div>
  )
}

export default GameOver