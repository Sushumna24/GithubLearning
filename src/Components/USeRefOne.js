import React, { useEffect, useRef } from "react";
function FocusInput()
{

    const inputRef=useRef(null);
    useEffect(()=>
    {
        inputRef.current.focus()
    },[])
    return(
        <div>
                              <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>useRef hook in React creates a mutable ref object that persists across re-renders and allows access to the DOM nodes or React elements.</p></center>

            <center><h1 style={{fontFamily:'Times New Roman'}}>UseRef Hook--Input text is focused when code gets executed</h1></center>
             <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman',marginLeft:'300px'}}>Input Text is Focussed</p>
           <input style={{marginLeft:'330px'}} ref={inputRef} type="text"/>
        </div>
    )
}
export default FocusInput