import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const { TRUNK } = window.VANTA;
TRUNK({
  el: 'body', // element selector string or DOM object reference
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  chaos: 5,
  spacing: 10,
  background: "#011627",
  color: "#FF6978",
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

