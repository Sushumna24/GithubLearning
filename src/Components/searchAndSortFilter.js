import axios from 'axios'
import React, { useEffect, useState } from "react";
const Search=()=>
{
    const[data,setdata]=useState([])
    
    const[records,setrecords]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>
        {
            console.log(res.data)
            setdata(res.data)
            setrecords(res.data)
        })
        .catch((err)=>console.log(err))


    },[])
    const Filter=(event)=>
    {
        setrecords(data.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    }

    return(
        <div>
            <div>
                <input type="text"  className='form-control' onChange={Filter} placeholder='Search'/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {records
                        .sort((a,b)=>a.id>b.id?1:-1)
                        .map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Search