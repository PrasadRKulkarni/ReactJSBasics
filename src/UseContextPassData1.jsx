import React, { createContext } from 'react';
import CompB from './UseContextPassData2'

const FirstName = createContext();
//Pass Data from Comp A to B.
//Provider is Comp A
//Consumer is Comp B

const CompA = () => {
    return (
        <>
            <FirstName.Provider value={"Passing data from Component A to Component B."}>
                <CompB />
            </FirstName.Provider>
        </>
    );
}

export default CompA;
export {FirstName};