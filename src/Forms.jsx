import React, { useState } from 'react';

const FormsExample = () => {
    const [name, setName] = useState();   
    const [fullName, setFullName] = useState();   
    
    const OnChangeEvent = (event) => {
        //console.log(event.target.value)
        setName(event.target.value);
    };

    const onSubmit = () => {
        setFullName(name);
    };

    return(
        <>
            <h1>On Click Event Text:  {fullName}</h1>
            <h1>On Change Event Text: {name}</h1>
            
            <input type="text" placeholder="Enter your name" 
            onChange={OnChangeEvent} value={name} />
            <button onClick={onSubmit}>Click Me</button>
        </>
    );
};

export default FormsExample;