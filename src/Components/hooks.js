import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // This useEffect hook will run after every render
  useEffect(() => {
    // Update the document title with the current count
    document.title = `Count: ${count}`;
  });

  return (
    <div>
                      <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>A counter implemented using functional components in React using hooks is a component that tracks and displays a numerical value, typically starting from zero, and provides functionality to increment this value through user interactions.</p></center>

      <h1 style={{fontFamily:'Times New Roman'}}>When clicked on "Increment" Count gets increased</h1>
      <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'270px'}}>Count: {count}</p>
<button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',marginLeft:'270px'}} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
