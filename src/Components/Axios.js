import axios from 'axios'
import React, { useEffect, useState } from 'react'
function AxiosTutorial()
{
    const [userdata,setData]=useState([]);
    useEffect(()=>
    {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>
        {
            console.log(response.data)
            setData(response.data)
        })
    .catch(err=>console.log(err))
})
return (
<div>
    {userdata.map(
        (data)=>{
            return(
                <div>{data.name}</div>

            )
        }
    )}

</div>
);
}
export default AxiosTutorial