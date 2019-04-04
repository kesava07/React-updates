import React, { useState, useEffect, memo } from 'react';
import Header from '../Header/Header';

const Hooks = () => {
    const [name, setName] = useState("Hooks");

    // const [data, setData] = useState([]);

    const handleChange = (event) => {
        setName(event.target.value)
    }
    useEffect(() => {
        document.title = name;

        // getData();
    });

    // const getData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then(response => response.json())
    //         .then(result => {
    //             setData(result)
    //         })
    // }
    // console.log(data, "chenna")

    //****************   resizing the window width using hooks    ***************//

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

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
            <h1>Window Width from Hooks: {width}</h1>
        </React.Fragment>
    )
};
export default memo(Hooks);