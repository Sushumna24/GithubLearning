import React, { useState } from 'react';

const EventHandlingDemo = () => 
{
  const [buttonText, setButtonText] = useState('Click Me');

  const handleClick = () => {
    if(buttonText==='Click Me')
    setButtonText('Button Clicked!')
  else
  setButtonText('Click Me')
};



  return (
    <div>
  <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br>
      <br></br>
      <br></br>React JS Events refer to user interactions with the web application, such as clicks, keyboard input, and other actions that trigger a response in the user interface.</p></center>      <center><p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>When clicked on Below button ,It gets toggled to Button Clicked That is Here Button Clicked Event is happening </p></center>
<button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'400px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default EventHandlingDemo;
