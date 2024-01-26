import React from 'react'
import {useReducer} from 'react'
const counterReducer=(state, action) =>{
  switch(action.type){
    case 'INCREMENT':
    return {count:state.count+1};
    case 'DECREMENT':
      return {count:state.count-1};
      
      default:
        return state;
  }
};

export default function Reduce() {
    const[state,dispatch]=useReducer(counterReducer,{count:0});
  return (
    <div>
        <p style={{padding:"5px",width:"60px",backgroundColor:"pink",border:"solid",borderRadius:"20px"}}>count:{state.count}</p>
        <button onClick={()=> dispatch({type:'INCREMENT'})}><b>+</b></button>
        <button onClick={()=> dispatch({type:'DECREMENT'})}><b>-</b></button>
        
    </div>
  )
}
