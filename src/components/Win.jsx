import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Win() {
    let {setStage} = useContext(AppContext)
  return (
    <div>
        <div className='engineer'>
            <h3>SpongeBob is now an Expert in Software Engineering</h3>
            <h4>Through dedication and hard work he is ready to succeed at any company</h4>
            
            <img className='pic'src='https://i.gifer.com/72Sz.gif'/>
            <button onClick={()=>{
                setStage("Job")
           }}>Hire SpongeBob</button>
            </div>
    </div>
  )
}

export default Win