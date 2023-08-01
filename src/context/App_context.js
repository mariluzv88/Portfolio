import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [trivia, setTrivia]= useState(null)
    const getTrivia = async () =>{
        const response = await axios.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple')
        setTrivia(response.data.results)
        console.log(response.data.results)
    }
    useEffect(()=>{
        getTrivia()
      },[])
    return(
        <AppContext.Provider value={{
            getTrivia,trivia,setTrivia

        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider