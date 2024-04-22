import React, { useState } from 'react';
function HookCounterFive() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <p style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', fontFamily: 'Times New Roman' }}>Clicking on button adds a number to the list </p>
            <button style={{
                color: 'white',
                backgroundColor: 'blueviolet', padding: '10px 30px', marginLeft: '220px'
            }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={addItem}>Add a Number</button>
            <ul>
                {items.map(item => 
                    <li key={item.id}>{item.value}</li>
                

                )}
            </ul>
        </div>
    )
}
export default HookCounterFive