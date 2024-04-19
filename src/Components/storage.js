import React ,{useRef} from "react";
const Storage=()=>
{
    localStorage.setItem("name","sushumna")
    sessionStorage.setItem("email","s@gmail.com")
    console.log(localStorage.getItem("name"));
    console.log(sessionStorage.getItem("email"))
    const data=useRef()
    const HandleSubmit=()=>
    {
        console.log(data.current.value, "initial value")
        localStorage.setItem("inputValue",data.current.value)
        
    }
    console.log(localStorage.getItem("inputValue"),"***")
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br><b>Local Storage:</b>Local Storage is a web storage object that allows you to save data on a user’s computer locally.<br></br><b>Session Storage:</b>sessionStorage persists data only for the duration of the page session. The data is cleared once the session ends (when the browser window is closed). </p></center>

            Hi
            <input  ref={data}></input>
            <button onClick={HandleSubmit}>Add</button>
        </div>
    )
}
export default Storage