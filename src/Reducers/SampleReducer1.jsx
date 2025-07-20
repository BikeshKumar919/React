import React,{useReducer} from "react";
import { reduceFunction } from "./reducerFunction";

function reducer(state,action) {
    switch (action.type) {
        case 'Increment':
            return {...state,count:state.count+1}
            
    
        default:
            break;
    }
}
export const SampleReducer1=()=>{
    const initialState={
        count:0
    }
    const [state,dispatcher] = useReducer(reduceFunction,initialState);
    return(
        <>
        <h2>count in SR1 is {state.count}</h2>
        <button onClick={()=>dispatcher({type:'Increment'})}>click of sr1</button>
        </>
    )
}