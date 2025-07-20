import React, { createContext,useContext,useState } from "react";


const CountContext = createContext();//returns provider and consumer


export const CountProvider = ({children})=>{
    const [count,setCount] = useState(0);
    return(
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    );
}



export const useCount = () => useContext(CountContext);
