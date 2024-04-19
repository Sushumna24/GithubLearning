import React from 'react';

const AlertEventDemo = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>An "alert event demo" in React refers to a demonstration showcasing the use of event handling to trigger alert messages in response to user actions within a React component.</p></center>
      <center><p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>When clicked on below button ,Alert window gets opened with some message.This is an alert event</p></center>
<button  style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'350px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={handleClick}>Click me</button>
    </div>
  );
};

export default AlertEventDemo
