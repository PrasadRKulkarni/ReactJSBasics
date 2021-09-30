import React from 'react';
//Import the clock component
// @ts-ignore
import Clock from 'react-digital-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Inbuilt Code of NPM for React
//npm i react-digital-clock
const NPMClock = () => {
    return (
        <>
            <Clock />
            <button className="btn btn-success">Bootstrap Button</button>
        </>
    );

};

export default NPMClock;