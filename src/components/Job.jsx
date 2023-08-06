import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Job() {
  let {setGameBoard} = useContext(AppContext)
  let {gameBoard} = useContext(AppContext)
  return (
    <div>
       <div className='engineerDone'>
       <button className='trivX' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
        <div className='engineer'>
          <div className='endText'>
            <h1>SpongeBob is now an Software Engineer !</h1><br/>
            <h2>Thanks to you</h2><br/><br/><br/><br/>
          </div>
{/*             
            <img className='pic'src=''/>
            <img className='pic'src='' */}
            <img className='picEnd'src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWI4YzVmYWJhMHpqNjl3N2p4Z251aWxsMzZoYWU0aDJleWJpemhqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/foIUVRRggFTXNI5uuZ/giphy.gif'/>
            
           
            </div></div>
    </div>
  )
}

export default Job