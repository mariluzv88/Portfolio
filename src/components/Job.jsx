import React, { useContext } from 'react'
import { AppContext } from '../context/App_context'

function Job() {
  return (
    <div>
       <div className='engineer'>
            <h3>SpongeBob is now an Expert in Software Engineering</h3>
            <h4>Through dedication and hard work he is ready to succeed at any company</h4>
            
            <img className='pic'src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWI4YzVmYWJhMHpqNjl3N2p4Z251aWxsMzZoYWU0aDJleWJpemhqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/foIUVRRggFTXNI5uuZ/giphy.gif'/>
            {/* <button onClick={()=>{
                setStage("Job")
           }}>Hire SpongeBob</button> */}
            </div>
    </div>
  )
}

export default Job