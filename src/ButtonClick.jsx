import React, { useState } from 'react';

const ButtonClick = () => {
     const state =  useState();
     const [count, setCount] = useState(0);
    //Count will have the current value.
    //setCount will have updated data
    //useState will be initial value which is to be updated
    //useState is used to maintain state in React JS
    const IncreementNumber = () => {
        setCount(count + 1);
    };

    const DecreementNumber = () => {
        setCount(count - 1);
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncreementNumber}>Increement</button>
            <button onClick={DecreementNumber}>Decreement</button>
        </>
    );
};

export default ButtonClick;