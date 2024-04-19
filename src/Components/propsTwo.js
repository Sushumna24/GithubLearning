import React from 'react';
export const Sample1 = (props) => {
    const{name}=props
  return (
    <div>
      <center><h1 style={{fontFamily:'Times New Roman'}}>Getting the props from other component (Method2)</h1></center>
      <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'290px'}}>
        Hello {name} !!
      </p>
    </div>
  );
};
