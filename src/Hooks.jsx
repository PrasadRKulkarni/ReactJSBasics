import React, { useState } from 'react';

const RefreshTimeHook = () => {
    let newTime = new Date().toLocaleTimeString();
     //const state =  useState();
     const [currentTime, setCTime] = useState(newTime);
    //Count will have the current value.
    //setCount will have updated data
    //useState is used to maintain state in React JS
    const NewTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCTime(newTime);
    };

    setInterval(NewTime, 1000);

    return(
        <>
            <h1>{currentTime}</h1>
            <button onClick={NewTime}>Get Time</button>
            <button onClick={setInterval}>Auto Increement Time</button>
        </>
    );
};

export default RefreshTimeHook;