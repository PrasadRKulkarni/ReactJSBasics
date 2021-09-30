import React from 'react';

function Greetings() {

let getTodaysDate = new Date();
let getHours = getTodaysDate.getHours();
let greeting = "";
const cssStyle ={};

if(getHours > 1 && getHours < 12)
{
  greeting = "Good Morning !";
  cssStyle.color = "green";
}
else if(getHours >=12 && getHours <19)
{
  greeting = "Good Afternoon !";
  cssStyle.color = "orange";
}
else
{
  greeting = "Good Night !";
  cssStyle.color = "black";
}


    return (<h1>Hello, <span style={cssStyle}> {greeting} </span></h1>);


}

export default Greetings;
