import React, { useState } from 'react';

const FormsExample2 = () => {
    const [name, setName] = useState("");   
    const [fullName, setFullName] = useState();   

    const handleSubmit  = (event) => {
        event.preventDefault();
        setFullName(name);
    };
    
    const OnChangeEvent = (event) => {
        //console.log(event.target.value)
        setName(event.target.value);
    };
   
    return(
        <>
            <form onSubmit={ handleSubmit  }>
                <h1>Form Submit:  {fullName}</h1>
                                
                <input type="text" placeholder="Enter your name" 
                onChange={OnChangeEvent} value={name} />
                <button type='submit'>Click Me</button>
            </form>
        </>
    );
};

export default FormsExample2;