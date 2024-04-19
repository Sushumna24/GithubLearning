import React, { useState } from 'react';
function HookCounter()
{
    const[count,setCount]=useState(0)

    return (
        <div>
                            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>A counter implemented using functional components in React using hooks is a component that tracks and displays a numerical value, typically starting from zero, and provides functionality to increment this value through user interactions.</p></center>

             <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Count gets Incremented when clicked on the button</p>
<button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'280px'}}onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={()=>setCount(count+1)} >Count {count}</button>
        </div>
    )
}
export default HookCounter