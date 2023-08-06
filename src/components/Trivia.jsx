import React,{useContext,useEffect,useReducer, useState} from 'react'
import { AppContext } from '../context/App_context'
function Trivia() {
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
            setStage("Mid")
          console.log('right')
        }else if(key === n ){
            setStage("lose")
          console.log("wrong")
        }
    }
    
  return (
    <div >
      <div className=''>
          <button className='trivX' onClick={()=>{
              setGameBoard(!gameBoard)
          }}>X</button>
          </div>
          <div >
            <div className='trivText'>
              <h3>{trivia.question}</h3></div> 
                  <div className='btnContainer'>
                      <div className='answers'>
                        {/* <button onClick={()=>getAnswer(y)} className='btn'  >{trivia.correct_answer}</button> */}
                        <div>
                          <button className='options' onClick={()=>getAnswer(n)}   >{trivia.incorrect_answers[1]}</button>
                          <button className='options' onClick={()=>getAnswer(y)}   >{trivia.correct_answer}</button>
                        </div>
                        <div>
                          <button className='options' onClick={()=>getAnswer(n)}   >{trivia.incorrect_answers[0]}</button>
                          <button className='options' onClick={()=>getAnswer(n)}   >{trivia.incorrect_answers[2]}</button>
                        </div>
                      {/* {trivia ?(trivia.incorrect_answers.map((q,i)=>{
                         
                        //   let an = [`${trivia.correct_answer},${q}`]
                         
                      return(
                        <div>
                        <button onClick={()=>getAnswer(n)} className='btn' key={i}>{q}</button>
                        </div>
                      )
                      
                      })):(<p>Loading...</p>) } */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Trivia