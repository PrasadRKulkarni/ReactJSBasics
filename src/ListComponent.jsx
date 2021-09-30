import React from 'react';
import fname, {technology, LearnTechnology} from './PassVariables';

function ListComponent() {
    return (  
            <ol>
                <li>{fname}</li>
                <li>{technology}</li>
                <li>{LearnTechnology()}</li>
            </ol>
        );
};

export default ListComponent;