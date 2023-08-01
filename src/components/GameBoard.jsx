import React,{useContext} from 'react'
import { AppContext } from '../context/App_context'


function GameBoard() {
    let {trivia} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
        getTrivia()
      },[])
  return (
    <div></div>
  )
}

export default GameBoard