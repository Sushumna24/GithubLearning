import React from 'react';
export const Sample = ({name,company}) => {
    // console.log(props)
  return (
    <div>
      <center><h1 style={{fontFamily:'Times New Roman'}}>Getting the props from other component (Method1)</h1></center>
      <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'80px'}}>
       Hello {name} welcome to {company}!!!!
      </p>
    </div>
  );
};

