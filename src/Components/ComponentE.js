import React, { useContext } from "react";
import ComponentF from './ComponentF';
import { ChannelContext,UserContext } from "../App";
function ComponentE()
{
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
    return (
        <div>
            
            <ComponentF/> 
            <p><b>Using useContextHook:</b></p>
            {user}--{channel}
            <br></br>
            <br></br>
        </div>
    )
}
export default ComponentE;