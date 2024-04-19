import React,{ useState } from 'react';

const EventHandlersDemwithParameter = () => {
  const [name,setName]=useState('Sushumna')
  
  const handleClick = () => {
    if(name!=='')
    alert(`Hello, ${name}`);
  else
  alert("Please enter the name!!")
  };

  return (
    <div>
       <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br>
      <br></br>
      <br></br>React JS Events refer to user interactions with the web application, such as clicks, keyboard input, and other actions that trigger a response in the user interface.</p></center>
      <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Event Handlers Demo</p>
      <b style={{fontSize:30}}>Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"
      value={name}
      name="name"
      style={{color:'blue' ,padding:'10px 15px',borderWidth:'5px'}}
      onChange={e => setName(e.target.value )}
      />

    <br></br>
    <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default EventHandlersDemwithParameter;
