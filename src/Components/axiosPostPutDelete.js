import axios from 'axios'
import React, { useState } from 'react'
function AxiosTutorialTwo()
{
    const [name,setName]=useState({firstname:"",lastname:""});
    const HandleSubmit=(e)=>
    {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",name)
        .then((response)=>
    {
        console.log(response)
        
    })
    }
    const HandleUpdate=(e)=>
    {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",name)
        .then((response)=>
    {
        console.log(response)
        
    })
    }
    const HandleDelete=(e)=>
    {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/2")
        .then((response)=>
    {
        console.log(response)
        
    })
    }
return (
<div>
    <form>
        <input type="text" name="firstname" value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}/>
        <br></br>
        <input type="text" name="lastname" value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}/>
        <br></br>
        <button type="submit" onClick={HandleSubmit}>Submit</button>
        <button type="submit" onClick={HandleUpdate}>Update</button>
        <button type="submit" onClick={HandleDelete}>Delete</button>
    </form>
</div>
);
}
export default AxiosTutorialTwo