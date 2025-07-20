import { useReducer } from "react";
import { reduceFunction } from "./reducerFunction";


export const SampleReducer=()=>{
    const initialState = {
        count : 0
    }
    const [state,dispatcher] = useReducer(reduceFunction,initialState)



    
    // function reduceFunction(state,action){
    //     switch(action.type){
    //         case 'Increment':
    //             return {...state,count:state.count+1};
    //         case 'Decrement':
    //             return {...state,count:state.count-1};
    //         default:
    //             return state
    //     }
    // }


    return(<>
    <h2>Value of count in reducer is {state.count}</h2>
    <button onClick={()=>dispatcher({type:'Increment'})}>Inc</button>
    <button onClick={()=>dispatcher({type:'Decrement'})}>Dec</button>
    
    </>);
}