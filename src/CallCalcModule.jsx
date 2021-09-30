import React from 'react';
import { add, sub, mul, div } from './Calc';

function CallCalculator() {
    return (  
            <ol>
                <li>Sum: {add(10, 20)}</li>
                <li>Sub: {sub(10, 20)}</li>
                <li>Mul: {mul(10, 20)}</li>
                <li>Div: {div(10, 20)}</li>                
            </ol>
        );
};

export default CallCalculator;