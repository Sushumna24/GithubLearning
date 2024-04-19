import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const[result,setResult]=useState('')

 const handleAdd=()=>{
    setResult(Number(num1)+Number(num2))
 }

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };
  const HandleClick=()=>
  {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="calculator">
      <center>
        <h1 style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Arithmetic Operations </h1></center>
      <b>Num1:</b><input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number 1"
      /><br></br>
      <br></br>
      <b>Num2:</b><input
        type="number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
        placeholder="Enter number 2"
      />
      
      <div className="buttons">
      <br></br>
        <button style={{padding:'8px 20px'}} onClick={handleAdd}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button  style={{padding:'8px 20px'}} onClick={handleSubtract}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{padding:'8px 20px'}} onClick={handleMultiply}>*</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{padding:'8px 20px'}} onClick={handleDivide}>/</button>
      </div>
      <br></br>
      <b>Result:</b><input type="text" value={result} readOnly />
      <br></br>
      <br></br>
      <br></br>
      <center><button onClick={HandleClick}>Logout</button></center>
    </div>
  );
};

export default Calculator;
