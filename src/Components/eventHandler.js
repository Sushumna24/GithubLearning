import React, { useState } from 'react';

const EventHandlersDemo = () => {
  const [message, setMessage] = useState('');
const[text,setText]=useState('')
  const handleMouseEnter = () => {
    setMessage('Mouse entered!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left!');
  };

  const handleKeyDown = (event) => {
    setText(`Key pressed: ${event.key}`);
  };

  const handleFocus = () => {
    setText('Input focused!');
  };

  const handleBlur = () => {
    setText('Input blurred!');
  };

  return (
    <div>
      
    <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br>
      <br></br>
      <br></br>React JS Events refer to user interactions with the web application, such as clicks, keyboard input, and other actions that trigger a response in the user interface.</p></center>
      <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Mouse Events and Keyboard Events </p>
      <div>
 <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:70}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover over me
        </button>
        <p style={{fontSize:20,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>{message}</p>
      </div>
      <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} />
        <p style={{fontSize:20,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>{text}</p>
      </div>
    </div>
  );
};

export default EventHandlersDemo;
