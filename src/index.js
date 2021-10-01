import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
//For Routing in React 
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    {/* For Routing it is embedded */}
    <BrowserRouter> 
      <App/> 
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

//Sugar Sntax for React Fragment is <> </>

// ReactDOM.render(
//   <div>
//     <h1> Hello World !!! </h1>
//     <p> Please like & share my channel </p>
//     <p> Please subscribe to my channel </p>
//   </div>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   [
//     <h1> Hello World !!! </h1>,
//     <p> Please subscribe to my channel </p>
//   ],
//   document.getElementById('root')
// );


