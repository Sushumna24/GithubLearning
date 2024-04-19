import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div style={{ backgroundColor: "lightgray", padding: "20px", border: "1px solid black" }}>
      <p style={{ color: "red" }}>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomAlert;
