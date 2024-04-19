import React, { useState } from 'react';
function HookCounterTwo()
{
    const initialCount=0
    const[count,setCount]=useState(initialCount)
    const incrementByFive=()=>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
                            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>A counter implemented using functional components in React using hooks is a component that tracks and displays a numerical value, typically starting from zero, and provides functionality to increment this value through user interactions.</p></center>

            <h1 style={{fontFamily:'Times New Roman'}}>Count Operations performed when clicked on respective buttons</h1>
             <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Count:{count}</p>
            {/* <button onClick={()=>setCount(initialCount)} >Reset</button>
            <button onClick={()=>setCount(count+1)} >Increment</button>
            <button onClick={()=>setCount(count-1)} >Decrement</button> */}
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={()=>setCount(initialCount)} >Reset</button>
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={()=>setCount(prevCount=>prevCount+1)} >Increment</button>
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={()=>setCount(prevCount=>prevCount-1)} >Decrement</button>
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={incrementByFive} >Increment 5</button>
        </div>
    )
}
export default HookCounterTwo