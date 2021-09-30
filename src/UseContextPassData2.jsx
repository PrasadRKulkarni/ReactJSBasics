import React, {useContext} from 'react';
import {FirstName} from './UseContextPassData1';

const CompB = () => {
    const fname = useContext(FirstName);
    return (
        <div>
            <h3>{fname}</h3>
        </div>
    );
}

export default CompB;