import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/App_context'

function Mid() {
  let {setGameBoard} = useContext(AppContext)
  let {gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
      getTrivia()
    },[])
  return (
    <div>
           <button className='trivX' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
           <div className='engineer'>
          <div className='gText'>
            <h1>Great Job! SpongeBob has studied hard</h1><br/>
            <h2>He is now at an intermediate level</h2><br/>
            <h4>Answer two more questions to help him become an expert </h4><br/>
          </div>
            
            <img className='pic'src='https://i.gifer.com/OxKS.gif'/>
            <button  className='ready'onClick={()=>{
                 
                setStage("S2")
           }}>I'm Ready</button>
            </div>
    </div>
  )
}

export default Mid