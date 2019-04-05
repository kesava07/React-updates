import React, { useState, useEffect, memo } from 'react';
import Header from '../Header/Header';

const Hooks = () => {
    const name = useForm("chenna", "first name");
    const surname = useForm("kesava", "last name");
    useTitle(name.value);
    const width = useWidth();  
    
    return (
        <React.Fragment>
            <Header />
            <h1>UseState hooks</h1>
            <input  {...name} />
            <input {...surname} />
            <h1>Window Width from Hooks: {width}</h1>
        </React.Fragment>
    )
};
export default memo(Hooks);

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    });
    return width;
};
const useForm = (initialValue, placeholder) => {
    const [value, setvalue] = useState(initialValue);
    const handleChange = (e) => {
        setvalue(e.target.value)
    }
    return {
        value: value,
        onChange: handleChange,
        placeholder: placeholder
    }
};

const useTitle = (title) => {
    useEffect(() => {
        document.title = title;
    });
}