import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
     const [count, setCount] = useState(0);

     //run some additional code after React has updated the DOM.
     //Called after the Render method is called.
     useEffect( () => {
        document.title ='You Clicked ' + count;
     });
    
    const IncreementNumber = () => {
        setCount(count + 1);
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncreementNumber}>Increement</button>
        </>
    );
};

export default UseEffectDemo;