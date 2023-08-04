import React,{useContext,useEffect,useReducer, useState} from 'react'
import { AppContext } from '../context/App_context'

function TriviaS2() {
    let y = true
    let n =  false
    let {trivia}= useContext(AppContext)
    let {setGameBoard,gameBoard} = useContext(AppContext)
    let {setStage} = useContext(AppContext)
//     const [answer,setAnswer]= useState([])
    
//    console.log(answer)
    const getAnswer = (key)=>{
        let ranswer = Math.floor(Math.random()*key.length)
        let btn = document.getElementsByClassName('.btn')
        // setAnswer(an[ranswer])
        if(key === y){
            setStage("S3")
          console.log('right')
        }else if(key === n ){
            setStage("lose")
          console.log("wrong")
        }
    }
    
  return (
    <div >
          <div >
              <h3>{trivia.question}</h3> 
                  <div className='btnContainer'>
                      <div className='answers'>
                        {/* <button onClick={()=>getAnswer(y)} className='btn'  >{trivia.correct_answer}</button> */}
                        <button onClick={()=>getAnswer(y)} className='btn'  >{trivia.correct_answer}</button>
                      {trivia ?(trivia.incorrect_answers.map((q,i)=>{
                         
                        //   let an = [`${trivia.correct_answer},${q}`]
                         
                      return(
                        <div>
                        <button onClick={()=>getAnswer(n)} className='btn' key={i}>{q}</button>
                        </div>
                      )
                      
                      })):(<p>Loading...</p>) }
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TriviaS2