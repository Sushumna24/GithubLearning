import React, { useRef } from "react";


import Calculator from "./calculator";
const LocalStorage=()=>
{
    const email=useRef()
    const password=useRef()
   const HandleSubmit=()=>
    {
        localStorage.setItem("emailData","s@gmail.com");
        localStorage.setItem("passwordData","12345")
    }
    const getEmail=localStorage.getItem("emailData");
    const getPassword=localStorage.getItem("passwordData");
    return (
        <div>
            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>Local Storage is a web storage object that allows you to save data on a user’s computer locally.</p></center>
            {
                
            getEmail&&getPassword?
                <Calculator/>:
            
            <form onSubmit={HandleSubmit}>
                <b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="email" ref={email}></input>
                <br></br>
               <b> Password:</b><input type="text" ref={password}></input>
                <br></br>
                <button>Login</button>
            </form>
}
        </div>

    );

};
export default LocalStorage;