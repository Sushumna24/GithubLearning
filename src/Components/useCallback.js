import React, { useState,memo } from "react";
function Callback(props)
{
   console.log("Child Component")

    return(
        <div>

        </div>
    );
}
export default memo(Callback)