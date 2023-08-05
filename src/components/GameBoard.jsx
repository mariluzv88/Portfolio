import React,{useContext,useEffect,useReducer, useState} from 'react'
import { AppContext } from '../context/App_context'
import Start from './Start'
import Mid from './Mid'
import Win from './Win'
import GameOver from './GameOver'
import Trivia from './Trivia'
import TriviaS2 from './TriviaS2'
import TriviaS3 from './TriviaS3'
import Job from './Job'

function GameBoard() {
  let y = true
  let n =  false
  // let game = document.getElementById('.gameBoard')
  // document.getElementById('gameBoard')
    let {trivia} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    let {setGameBoard,gameBoard} = useContext(AppContext)
    let {stage} = useContext(AppContext)
    // const [state,dispatch] = useReducer(reducer,{})
    const answer = (key)=>{
        if(key === y){
          console.log('right')
        }else if(key === n ){
          console.log("wrong")
        }
    }
    // const reducer = (state,action)=>{

    // }

    // useEffect(()=>{
    //   console.log(trivia)
    //   setGameBoard(null)
    //     // getTrivia()
    //   },[])
      const loaded = ()=>{
  return (
    // className={gameBoard ?'gameBoard' :null}
    <div className={gameBoard ?'gameBoard' :null}>
      {/* <div className='gameContainer'> */}
      <div className='gameContainer'>
      {stage === "Start" &&<Start/>}
      {stage === "Mid" && <Mid/>}
      {stage === "Win" && <Win/>}
      {stage === "Game" && <GameBoard/>}
      {stage === "lose" && <GameOver/>}
      {stage === "Trivia" && <Trivia/>}
      {stage === "S2" && <TriviaS2/>}
      {stage === "S3" && <TriviaS3/>}
      {stage === "Job" && <Job/>}
            {/* <div className='engineer'>
            <h3>Help this novice engineer get a job</h3>
            <h4>Answer the question to help them learn</h4>
            <img className='pic'src='https://media.istockphoto.com/id/1193528262/video/icon-man-bye-figure-animation-character-2d-cartoon-animations-pictogram-people-unique.jpg?s=640x640&k=20&c=I2nBplxutcywzAFlnxLSYafKwK85e5CpI6tYjULEHWg='/>
            </div> */}
            {/* <div className='game'> */}
            {/* <div className={gameBoard ?'game' :null}>
              <h3>{trivia.question}</h3> 
                  <div className='btnContainer'>
                      <div className='answers'>
                        <button onClick={()=>answer(y)} className='btn'  >{trivia.correct_answer}</button>
                      {trivia ?(trivia.incorrect_answers.map((q,i)=>{
                      return(
                        <div>
                        <button onClick={()=>answer(n)} className='btn' key={i}>{q}</button>
                        </div>
                      )
                      })):(<p>Loading...</p>) }
                    </div>
                </div>
            </div> */}
      </div>
    </div>
   
  ) }
    const loading = () => {
    return <h1></h1>;
  };

  return trivia ? loaded() : loading();
}


export default GameBoard