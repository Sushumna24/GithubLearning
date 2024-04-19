import React, { useState } from "react";
function Child(props) {
    const [name, setName] = useState('')
    const HandleSubmit = (e) => {
        e.preventDefault();
        props.getData(name);
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}
export default Child;