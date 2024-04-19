import React,{useEffect, useState} from 'react'
function UseEffectOne()
{
    const[count,setCount]=useState(0)
    useEffect(()=>
    {
        document.title=`you clicked ${count} times`
    }

    )
    return(
        
        <div>
 <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>useEffect Hook in React is a function that enables performing side effects in function components, such as data fetching, or manually changing the DOM, after the component has rendered.</p></center>

            
            
            <center><h1 style={{fontFamily:'Times New Roman'}}>When clicked on "Click Button" Count gets increased in the document title</h1></center>

        

      <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'310px'}} onClick={()=>setCount(count+1)}>click {count}</button>
            <br></br>
        </div>
    )
}

export default UseEffectOne