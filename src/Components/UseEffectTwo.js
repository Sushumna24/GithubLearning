import React,{useEffect, useState} from 'react'
function UseEffectTwo()
{
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')
    useEffect(()=>
    {
        console.log('Use Effect Updating the document');
        document.title=`you clicked ${count} times`
    },[count])
    return(
        
        <div><br></br>
         <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>useEffect Hook in React is a function that enables performing side effects in function components, such as data fetching, or manually changing the DOM, after the component has rendered.</p></center>

        <center><h1 style={{fontFamily:'Times New Roman'}}>When clicked on "Click Button" only Count gets increased in the document title but not when we enter in Text Field</h1></center>
        <input  style={{marginLeft:'320px'}}type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <br></br>
            <br></br>
        <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'350px'}} onClick={()=>setCount(count+1)}>click {count}</button>
        </div>
    )
}

export default UseEffectTwo