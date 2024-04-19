import React, { useReducer } from "react";
const initialState=0;
const reducer=(state,action)=>{
    switch(action)
    {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }

}
const UseReducerOne=()=>
{
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
                  <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>The useReducer hook in React is a function that allows state management through a reducer function, similar to how Redux manages state, enabling more complex state updates in functional components.</p></center>

            <center><h1 style={{fontFamily:'Times New Roman'}}>Using useReducer(Simple state and action)</h1></center>
            <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Count - {count}</p>
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={()=>dispatch('increment')}>Increment</button>
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={()=>dispatch('decrement')}>Decrement</button>
            <button  style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
export default UseReducerOne;