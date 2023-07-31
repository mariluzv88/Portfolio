import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()

const AppContextProvider = (props)=>{
    return(
        <AppContext.Provider value={{

        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider