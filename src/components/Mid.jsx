import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/App_context'

function Mid() {
    let {setStage} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
      getTrivia()
    },[])
  return (
    <div>
           <div className='engineer'>
            <h3>Great Job! SpongeBob has studyed hard</h3>
            <h3>He is now at an intermediate level</h3>
            <h4>Answer two more questions to help him become an expert </h4>
            
            <img className='pic'src='https://i.gifer.com/OxKS.gif'/>
            <button onClick={()=>{
                 
                setStage("S2")
           }}>I'm Ready</button>
            </div>
    </div>
  )
}

export default Mid