import React, { useState, useMemo } from 'react';

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log("Factorial Called");
  return result;
}

function UseMemoTwo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(5);
  const factorialValue = useMemo(() => factorial(countTwo), [countTwo]);

  return (
    <div>
      <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>useMemo hook in React is used to memoize the result of a function, caching its return value to optimize performance by preventing unnecessary recalculations.</p></center>

      <center><h1 style={{fontFamily:'Times New Roman'}} >Use Memo--Checking the performance while using factorial function </h1></center>
       <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'370px'}}>Counter: {count}</p>
       <br></br>
      <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={()=>setCount(count+1)}>Count Increment One</button>
      <br></br>
<br></br>      <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onClick={() => setCountTwo(countTwo + 1)}>Count Increment Two</button> 
      <h2 style={{fontFamily:'Times New Roman',marginLeft:'320px'}}>Factorial of Counter: {factorialValue}</h2>
    </div>
  );
}

export default UseMemoTwo;
