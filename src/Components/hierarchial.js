import React from "react";
const Board = () => {
    return (

        <div style={{
            backgroundColor: 'green',
            padding: 10,
            margin: 40
        }}>
            Board
            <Square />

        </div>

    );


};
const Square = () => {
    return (
        <div style={{
            backgroundColor: 'red',
            padding: 10,
            margin: 40
        }}>
            Square


        </div>

    );


};
const Games = () => {
    return (
        <div style={{
            backgroundColor: 'blue',
            padding: 10,
            margin: 40
        }}>
            Games
            <Board />

        </div>

    );


};
export default Games