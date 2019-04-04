import React, { useState } from 'react';
import Header from '../Header/Header';

const Hooks = () => {
    const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return (
        <React.Fragment>
            <Header />
            <h1>UseState hooks</h1>
            <input
                style={{ marginLeft: "100px" }}
                placeholder="Name"
                value={name}
                onChange={handleChange}
            />
        </React.Fragment>
    )
};
export default Hooks;