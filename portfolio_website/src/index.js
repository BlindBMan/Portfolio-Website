import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Index from './Index';
import reportWebVitals from './reportWebVitals';

import SpecificProject from "../portfolio_website/pages/specificProject";

ReactDOM.render(
  <React.StrictMode>
    <SpecificProject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
