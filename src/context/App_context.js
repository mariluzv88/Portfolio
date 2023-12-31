import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [rightCaro, setRightCaro]= useState(0)
    const [leftCaro, setLeftCaro]= useState(0)
    const [trivia, setTrivia]= useState(null)
    const [gameBoard, setGameBoard] = useState(false)
    const [stage,setStage] = useState("")
    const getTrivia = async () =>{
        const response = await axios.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple')
        let triv = response.data.results
        let ranNum = Math.floor(Math.random()*triv.length)
        setTrivia(triv[ranNum])
        console.log(response.data.results)
    }
   
    // useEffect(()=>{
    //     getTrivia()
    //   },[])
    return(
        <AppContext.Provider value={{
            getTrivia,trivia,setTrivia,gameBoard,setGameBoard,stage,setStage
            ,rightCaro,setRightCaro,leftCaro,setLeftCaro

        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider