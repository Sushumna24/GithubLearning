import React, { useState } from 'react';

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    const handleClick = () => {
        if(name.firstName==='' && name.lastName==='')
        alert("First Name and last Name are not defined.Please enter the names!!!");
        else
        alert(`First Name: ${name.firstName}, Last Name: ${name.lastName}`);
    };

    return (
        <div>
                            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>The Spread operator lets you expand an iterable like an object, string, or array into its elements</p></center>

            <h1 style={{fontFamily: 'Times New Roman' }}>Displaying the data using spread operator</h1>
            <p style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', fontFamily: 'Times New Roman' }}></p>
            <form>
                <input
                    type="text"
                    style={{ padding: '7px 20px', borderWidth: '10px' }}
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    style={{ padding: '7px 20px', borderWidth: '10px' }}
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />
                <button type="button" onClick={handleClick}>Display Data</button>
                <h2 style={{ color: 'blueViolet' }}>First Name: {name.firstName}</h2>
                <h2 style={{ color: 'blueViolet' }}>Last Name: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
                
            </form>
        </div>
    );
}

export default HookCounterThree;














 