import React,{useState,useEffect,useRef} from "react";
function HookTimer()
{
    const[timer,setTimer]=useState(0)
    const intervalRef=useRef();
    useEffect(

        ()=>
        {
            intervalRef.current=setInterval(()=>
            {
                setTimer(prevTimer=>prevTimer+1)
            },1000)
            return()=>
            {
                clearInterval(intervalRef.current)
            }
        }
    )
    return(
        <div>
                                        <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>React timer hook is a custom react hook, built to handle timer, stopwatch, and time logic/state in your react component.</p></center>

             <h1 style={{fontFamily:'Times New Roman'}}>Timer Using Hooks</h1>
           <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'40px'}}>Hook Timer:{timer} </p>
           <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'60px'}} onClick={()=>clearInterval(intervalRef.current)}>Stop Hook Timer</button>
        </div>
    )
}
export default HookTimer