import React from 'react';

function Basic() {

const fname = 'Prasad';
const lname = 'Kulkarni';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";

return (
    <React.Fragment>
   
    <p>JavaScript Expressions in JSX in ReactJs:  { 3 * 3 }</p>
    <p>Random Number: {Math.random()}</p>
    <p>Template Literals in JSX in ReactJS: {fname + ' ' + lname } </p>
    <p>{`Template Literal another Example:${fname} ${lname}`}</p>
    <p>Current Date/Time : {currentDate } {currentTime}</p>
    <h2>JSX Attributes in ReactJS</h2>
    <img src={img1} alt="JSX Attributes in ReactJS" />
    
    
  </React.Fragment>
);

}

export default Basic;