import React, {useMemo,useState} from "react";
function CounterMemo()
{
    const[countOne,setCountOne]=useState(0);
    // const[countTwo,setCountTwo]=useState(0);

    const incrementOne=()=>
    {
        setCountOne(countOne+1);
    }
    // const incrementTwo=()=>
    // {
    //     setCountTwo(countTwo+1);
    // }
    const isEven=useMemo(
        ()=>
        {
            let i=0;
            while(i<2000000)i++
            return countOne%2==0
        },[countOne]
    )
    return(
        <div>

<center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>useMemo hook in React is used to memoize the result of a function, caching its return value to optimize performance by preventing unnecessary recalculations.</p></center>

            <center><h1 style={{fontFamily:'Times New Roman'}}>When Count value is even number,then it is displaying "even" else "odd" </h1></center>

            
            <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'300px'}} onClick={incrementOne}>Count One {countOne} </button>
            <br></br>
            <b><span style={{fontSize:'25px',marginLeft:'340px'}}>{isEven?'Even':'Odd'}</span></b>
            {/* <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={incrementTwo}>Count Two {countTwo} </button> */}
        </div>
    )
}
export default CounterMemo