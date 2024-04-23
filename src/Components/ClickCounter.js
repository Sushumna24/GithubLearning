import React from "react";
import enhancedCounter from "./EnhancedCounter";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name} Counter Clicked {props.count} times
      </button>
    </div>
  );
};

export default enhancedCounter(ClickCounter, 1);