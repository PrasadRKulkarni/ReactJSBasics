import React from 'react';

const SM = () =>{
    return(<h1>Component from same module.</h1>)
}

const ArrowFn = () => {
    return(
        <>
            <h4>Welcome to Arrow Function</h4>
            <SM />
        </>
    );
}

export default ArrowFn;