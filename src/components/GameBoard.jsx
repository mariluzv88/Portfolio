import React,{useContext,useEffect} from 'react'
import { AppContext } from '../context/App_context'


function GameBoard() {
    let {trivia} = useContext(AppContext)
    let {getTrivia} = useContext(AppContext)
    useEffect(()=>{
      console.log(trivia)
        getTrivia()
      },[])
      const loaded = ()=>{
  return (
    <div className='gameBoard'>
      <div className='engineer'>
        <h3>Help this novice engineer get a job</h3>
        <h4>Answer the question to help them learn</h4>
        <img className='pic'src='https://media.istockphoto.com/id/1193528262/video/icon-man-bye-figure-animation-character-2d-cartoon-animations-pictogram-people-unique.jpg?s=640x640&k=20&c=I2nBplxutcywzAFlnxLSYafKwK85e5CpI6tYjULEHWg='/>
        </div>
        <div className='game'>
          <h3>{trivia.question}</h3> 
              <div className='btnContainer'>
                  <div className='answers'>
                    <button className='btn' key={i}>{trivia.correct_answer}</button>
                  {trivia ?(trivia.incorrect_answers.map((q,i)=>{
                  return(
                    <div>
                    <button className='btn' key={i}>{q}</button>
                    </div>
                  )
                  })):(<p>Loading...</p>) }
                </div>
            </div>
        </div>
    </div>
   
  ) }
    const loading = () => {
    return <h1>Loading...</h1>;
  };

  return trivia ? loaded() : loading();
}


export default GameBoard