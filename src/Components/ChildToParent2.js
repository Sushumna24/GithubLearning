import React, { useState } from "react";
function ChildTwo(props)
{
    const[task,setTask]=useState("")
    const HandleSubmit=()=>
    {
        if(task!==''){
            props.add(task)
        setTask("");
        }
        else{
            alert("Please enter the Task!!!")
        }

    }
    return (
        <div>
            <input style={{padding:'10px 10px',borderRadius:10,fontWeight:"bold",borderWidth:5}} value={task} onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={HandleSubmit}>AddTask</button>

        </div>

    );
}
export default ChildTwo