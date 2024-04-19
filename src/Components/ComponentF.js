import React from "react";
import { ChannelContext, UserContext } from "../App";
function ComponentF()
{
    return(
         <div>
             <h3> Accessing data from App.js--upper component to ComponentF--Lower most component (nested component)</h3>
            <UserContext.Consumer>
                {
                    user=>
                    {
                        return (
                            <div>
                                <ChannelContext.Consumer>
                                    {
                                    channel=>
                                    {
                                        return(
                                        <div>
                                            User Context Value is {user}
                                            <br></br>
                                            Channel Context Value is {channel}

                                        </div>
                                        )

                                    }
                                }
                                </ChannelContext.Consumer>
                            </div>
                        )
                        
                    }
                }
            </UserContext.Consumer>
        </div>
    )

}
export default ComponentF